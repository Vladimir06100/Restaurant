<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //list of all products in the database for the restaurateur_id
        $produits = Produit::all();
        return response()->json(['produits' => $produits]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // create a new product
        $request->validate([
            'nom_produit' => 'required|string',
            'categorie_id' => 'required|integer',
            'description' => 'required',
            'prixHT' => 'required|integer',
            'TVA' => '',
            'prixTTC' => 'required|integer',
            'quantite' => 'required|integer',
        ]);

        $produit = Produit::create([
            'nom_produit' => $request->nom_produit,
            'categorie_id' => $request->categorie_id,
            'description' => $request->description,
            'prixHT' => $request->prixHT,
            'TVA' => $request->TVA,
            'prixTTC' => $request->prixTTC,
            'quantite' => $request->quantite,
            // 'restaurateur_id' => auth()->user()->id,
        ]);

        return response()->json(['produit' => $produit]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // show a product
        $produit = Produit::find($id);
        return response()->json(['produit' => $produit]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // edit a product
        $produit = Produit::find($id);
        return response()->json(['produit' => $produit]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // update a product
        $request->validate([
            'nom_produit' => 'required|string',
            'categorie' => 'required|string',
            'description' => 'required|string',
            'prixHT' => 'required|integer',
            'TVA' => 'required|integer',
            'prixTTC' => 'required|integer',
            'quantite' => 'required|integer',
        ]);

        $produit = Produit::find($id);
        $produit->nom_produit = $request->nom_product;
        $produit->categorie_id = $request->categorie_id;
        $produit->description = $request->description;
        $produit->prixHT = $request->prixHT;
        $produit->TVA = $request->TVA;
        $produit->prixTTC = $request->prixTTC;
        $produit->save();

        return response()->json([
            'message' => 'Produit updated.',
            'produit' => $produit
        ], 201);
    }


    public function destroy($id)
    {
        // delete a product
        $produit = Produit::find($id);
        $produit->delete();
        return response()->json([
            'message' => 'Produit deleted.',
            'produit' => $produit
        ], 201);
    }
}
