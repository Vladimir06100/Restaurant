<?php

namespace App\Http\Controllers;

use App\Models\Restaurateur;
use Illuminate\Http\Request;

class RestaurateurController extends Controller
{
    //affiche profile
    public function show($id)
    {
        $restaurateur = Restaurateur::find($id);
        return response()->json(['restaurateur' => $restaurateur]);
    }

    // creation profile
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string'
        ]);
        $restaurateur = Restaurateur::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        return response()->json([
            'message' => 'Restaurateur created.',
            'restaurateur' => $restaurateur
        ], 201);
    }

    // modification profile
    public function update(Request $request, $id)
    {
        $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string'
        ]);
        $restaurateur = Restaurateur::find($id);
        $restaurateur->update($request->all());
        return response()->json([
            'message' => 'Restaurateur modifier.',
            'restaurateur' => $restaurateur
        ], 200);
    }
    
    // suppression profile
    public function delete($id)
    {
        $restaurateur = Restaurateur::find($id);
        $restaurateur->delete();
        return response()->json([
            'message' => 'Restaurateur supprimer.',
            'restaurateur' => $restaurateur
        ], 200);
    }
    
}
