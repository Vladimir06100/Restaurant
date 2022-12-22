<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarteController extends Controller
{

    public function index()
    {
        // list of all categorie in the database for the restaurant_id
        $categories = Categorie::all();
        return response()->json([
            'categorie' => $categories,
            'categories' => DB::table('categories')


        ], 200);
    }

    public function create()
    {
    }


    public function store(Request $request, Categorie $categorie)
    {
        // request validation
        $request->validate([
            'type' => 'string',

        ]);
        // create a new categori in the database
        $categorie = Categorie::create([
            'type' => $request->type,


        ]);


        $data = $request->toArray();

        Categorie::create($data);

        return response()->json([
            'message' => 'Categorie crée',
            'categorie' => $categorie
        ], 201);
    }


    public function show()
    {
        
    }


    public function edit()
    {
        
    }


    public function update()
    {
        
    }


    public function destroy()
    {
       
    }
}
