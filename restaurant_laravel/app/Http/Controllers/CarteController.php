<?php

namespace App\Http\Controllers;

use App\Models\Carte;
use Illuminate\Http\Request;

class CarteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // list of all cartes(menu) in the database for the restaurant_id
        $cartes = Carte::all();
        return response()->json([
            'message' => 'Cartes retrieved successfully.',
            'cartes' => $cartes
        ], 200);
        
        
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
        // create a new carte in the database
        $carte = new Carte();
        $carte->nom_carte = $request->nom_carte;
        $carte->description_carte = $request->description_carte;
        $carte->restaurant_id = $request->restaurant_id;
        $carte->save();

        response()->json([
        'message' => 'Carte created.',
        'carte' => $carte
        ], 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
