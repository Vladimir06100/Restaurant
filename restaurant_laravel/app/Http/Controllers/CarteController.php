<?php

namespace App\Http\Controllers;

use App\Models\Carte;
use App\Models\Produit  ;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CarteController extends Controller
{

    public function index()
    {
        // list of all cartes(menu) in the database for the restaurant_id
        $cartes = Carte::all();
        return response()->json([
            'message' => 'Cartes retrieved successfully.',
            'cartes' => $cartes,
            'liste_des_produits'=> DB::table('produits')
            ->leftJoin('cartes', 'produits.id', '=', 'cartes.produit_id')
            /* ->where('produits.categorie_id','=',$group->id) */
            ->get()
            
        ], 200);
        
        
    }

    public function create()
    {
        
    }


    public function store(Request $request, Produit $produit)
    {
        // request validation
        $request->validate([
            'nom_carte' => 'required',
            'produit_id' => 'required',
            'restaurant_id' => 'required',
            'formule_id' => 'required',
        ]);
        // create a new carte in the database
        $carte = Carte::create([
        'nom_carte' => $request->nom_carte,
        'produit_id' => $produit->id,
        'restaurant_id' => auth()->user()->id,
        'formule_id' => $request->formule_id,
    

        ]);

        
        $data = $request->toArray();
        
        Carte::create($data);

        return response()->json([
        'message' => 'Carte created.',
        'carte' => $carte
        ], 201);

    }


    public function show(Carte $carte)
    {
        return response()->json(['carte' => $carte,
    
    
    ]);
    }


    public function edit(Carte $carte)
    {
        return response()->json(['carte' => $carte]);
    }


    public function update(Request $request, Carte $carte)
    {
        $request->validate([
            'nom_carte' => 'required',
            'produit_id' => 'required',
            'restaurant_id' => 'required',
            'formule_id' => 'required',
        ]);

        $carte->fill($request->toArray());
        $carte->save();
        return response()->json(['carte' => $carte]);
    }


    public function destroy(Carte $carte )
    {
        $carte->delete();
    }
}
