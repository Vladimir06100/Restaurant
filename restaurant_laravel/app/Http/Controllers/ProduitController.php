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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // create a new product
        $request->validate([
            'nom_produit' => 'required|string',
            'categorie' => 'required|string',
            'prixHT' => 'required|integer',
            'prixTTC' => 'required|integer',
            'TVA' => 'required|integer',
        ]);

        $produit = Produit::create([
            'nom_produit' => $request->nom_product,
            'categorie' => $request->categorie,
            'prixHT' => $request->prixHT,
            'prixTTC' => $request->prixTTC,
            'TVA' => $request->TVA,
            'restaurateur_id' => auth()->user()->id,
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
            'prixHT' => 'required|integer',
            'prixTTC' => 'required|integer',
            'TVA' => 'required|integer',
        ]);

        $produit = Produit::find($id);
        $produit->nom_produit = $request->nom_product;
        $produit->categorie = $request->categorie;
        $produit->prixHT = $request->prixHT;
        $produit->prixTTC = $request->prixTTC;
        $produit->TVA = $request->TVA;
        $produit->save();

        return response()->json([
            'message' => 'Produit updated.',
            'produit' => $produit
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
