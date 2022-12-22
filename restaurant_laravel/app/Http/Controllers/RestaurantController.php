<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class RestaurantController extends Controller
{
    
    //Affiche les restaurants de la restaurateur connecté
    public function index()
    {
        $id = Auth::user()->id;

        $restaurants = Restaurant::where('restaurateur_id', '=', $id)->get();

        return response()->json([
            'restaurants' => $restaurants
        ]);
    }

    public function create()
    {
        //
        
    }

    // Creation d'un restaurant
    public function store(Request $request)
    {
        
        $request->validate([
            'nom' => 'required|string|unique:restaurants',
            'adresse' => 'required|string',
            'heure_ouverture' => 'required|string',
            'heure_fermeture' => 'required|string',
            'image' => 'required|string',
        ]);

        $id = Auth::user()->id;

        $restaurant = Restaurant::create([
            
            'nom' => $request->nom,
            'adresse' => $request->adresse,
            'heure_ouverture' => $request->heure_ouverture,
            'heure_fermeture' => $request->heure_fermeture,
            'image' => $request->image,
            'restaurateur_id' => $id
        ]);
        return response()->json([
            'message' => 'Restaurant created.',
            'restaurant' => $restaurant
        ], 201);
    }

    // Affiche un restaurant
    public function show($id)
    {
        $restaurant = Restaurant::find($id);
        return response()->json(['restaurant' => $restaurant]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    // Modification d'un restaurant
    public function update(Request $request, $id)
    {
        @dd('coucou');

        $request->validate([
            'nom' => 'required|string|unique:restaurants',
            'adresse' => 'required|string',
            'heure_ouverture' => 'required|string',
            'heure_fermeture' => 'required|string',
            'image' => 'required|string',
        ]);
        
        $restaurant = Restaurant::find($id);
        $restaurant->update($request->all());
        return response()->json([
            'message' => 'Restaurant modifié.',
            'restaurant' => $restaurant
        ], 200);
    }

    // Suppression d'un restaurant
    public function destroy($id)
    {
        $restaurant = Restaurant::find($id);
        $restaurant->delete();
        return response()->json([
            'message' => 'Restaurant supprimé.'
        ], 200);
    }
}
