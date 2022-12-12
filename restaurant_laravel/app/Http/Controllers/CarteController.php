<?php

namespace App\Http\Controllers;

use App\Models\Carte;
use Illuminate\Http\Request;

class CarteController extends Controller
{

    public function index()
    {
        // list of all cartes(menu) in the database for the restaurant_id
        $cartes = Carte::all();
        return response()->json([
            'message' => 'Cartes retrieved successfully.',
            'cartes' => $cartes
        ], 200);
        
        
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        // request validation
        $request->validate([
            'nom_carte' => 'required',
            'produit_id' => 'required',
            'restaurant_id' => 'required',
            'formule_id' => 'required',
        ]);
        // create a new carte in the database
        $carte = new Carte();
        $carte->nom_carte = $request->nom_carte;
        $carte->produit_id = $request->produit_id;
        $carte->restaurant_id = $request->restaurant_id;
        $carte->formule_id = $request->formule_id;
        $carte->save();

        response()->json([
        'message' => 'Carte created.',
        'carte' => $carte
        ], 201);

    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
