<?php

namespace App\Http\Controllers;

use App\Models\Carte;
use App\Models\Produit  ;
use App\Models\Produit_Carte;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Psy\Command\WhereamiCommand;

class CarteController extends Controller
{

    public function index()
    {
        // list de touts les cartes(menu) dans  database pour  restaurant_id
        $cartes = Carte::all();
        return response()->json([
            'message' => 'Cartes retrieved successfully.',
            'cartes' => $cartes,
            'liste_des_produits'=> DB::table('produits')
            ->leftJoin('cartes', 'produits.id', '=', 'cartes.produit_id')
             ->get()
            
        ], 200);
        
        
    }

    public function create()
    {
        //
    }


    public function store(Request $request,Produit_Carte $produit_carte)
    {
        // request validation
        $request->validate([
            'nom_carte' => 'string',

        ]);
        // creer une nouvelle carte dans la db
        $carte = Carte::create([
            'nom_carte' => $request->nom_carte,
            'restaurant_id' => $request->restaurant_id,
            'formule_id' => $request->formule_id,

        ]);

// ici jinsere la liaison carte & produit
$produit_carte::create([
    'carte_id'=> $carte->id,
    'produit_id' => $request->produit_id
]);

  
    /*   'jointure carte_produits'=> DB::table('produit_cartes')
        ->leftJoin('cartes', 'produit_cartes.carte_id', '=', 'cartes.id')
        ->where('produit_cartes.produit_id','=',$produit->id)
        ->get() */


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
