<?php

namespace App\Http\Controllers;

use App\Models\Formule;
use Illuminate\Http\Request;

class FormuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // ici on va chercher les formules dans la base de données
        // et on les envoie à la vue
        $formules = Formule::all();
        return view('formules.index', ['formules' => $formules]);

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
        // on va créer une nouvelle formule dans la base de données avec les données du formulaire 
        // tel que le nom et le prix  'nom_formule', 'description_formule', 'entree', 'plat', 'dessert', 'prix_formule', 'votre_prix', 'carte_id'
        $formule = new Formule();
        $formule->nom_formule = $request->nom_formule;
        $formule->description_formule = $request->description_formule;
        $formule->entree = $request->entree;
        $formule->plat = $request->plat;
        $formule->dessert = $request->dessert;
        $formule->prix_formule = $request->prix_formule;
        $formule->votre_prix = $request->votre_prix;
        $formule->carte_id = $request->carte_id;
        $formule->save();

        response()->json([
        'message' => 'Formule created.',
        'formule' => $formule
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
        // ici on va chercher la formule dans la base de données
        $formule = Formule::find($id);
        return response()->json(['formule' => $formule]);
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
