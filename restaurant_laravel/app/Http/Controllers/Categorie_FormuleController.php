<?php

namespace App\Http\Controllers;

use App\Models\Categorie_Formule;
use Illuminate\Http\Request;

class Categorie_FormuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categorie_formules = Categorie_Formule::all();
        return response()->json(['categorie_formules', $categorie_formules]);
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
        $request->validate([
            'nom_formule' => 'required|string',
            'description_formule' => 'required|string',
            'entree' => 'string|nullable',
            'plat' => 'string|nullable',
            'dessert' => 'string|nullable',
            'prix_formule' => 'required|integer',
            'votre_prix' => 'required|integer',
        ]);

        $categorie_Formule = Categorie_Formule::create([
            
            'formule1' =>$request = ['entree', 'plat', 'dessert'],
            'formule2' =>$request = [ 'plat', 'dessert'],
            'formule1' =>$request = ['entree', 'plat']

            
        

        ]);
        return response()->json(['message' =>'categorie de formule creee.' , 'categorie_Formule' => $categorie_Formule], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $categorie_formule = Categorie_formule::find($id);
        return response()->json(['categorie_formule' => $categorie_formule]);    }

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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
