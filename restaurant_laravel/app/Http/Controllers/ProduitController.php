<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    
    //liste produits
    public function index()
    {
        $produits=Produit::all();

        return response()->json(['produits'=>$produits]);
        # code...
    }

    // creation produit

    public function store(Request $request)
    {
        $request->validate([
            'nom_produit' => 'required|string',
            'categorie' => 'required|string',
            'prixHT' => 'required|float',
            'prixTTC' => 'required|float',
            'TVA' => 'required|float'
        ]);
       $produit=Produit::create([
            'nom_produit' => $request->nom_produit,
            'categorie' => $request->categorie,
            'prixHT' => $request->prixHT,
            'prixTTC' => $request->prixTTC,
            'TVA' => $request->prixTTC,
        ]);
        return response()->json([
            'message' => 'Produit created.',
            'produit' => $produit
        ], 201);
    }
}
