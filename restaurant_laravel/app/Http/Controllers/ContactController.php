<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    //liste contacts
    public function index()
    {
        $contacts=Contact::all();
        return response()->json(['contacts'=>$contacts]);
    }

    // creation contact
    public function store(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string'
        ]);
       $contact=Contact::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'message' => $request->message,
        ]);
        return response()->json([
            'message' => 'Contact created.',
            'contact' => $contact
        ], 201);
    }
}
