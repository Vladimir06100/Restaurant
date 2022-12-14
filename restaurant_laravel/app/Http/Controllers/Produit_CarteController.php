<?php

namespace App\Http\Controllers;

use App\Models\Produit_Carte;
use Illuminate\Http\Request;

class Produit_CarteController extends Controller
{
    // ici c'est le controller de la table Produit_Cartes qui va permettre de faire intermédiaire entre la table Produit et la table Carte
    // pour pouvoir faire des requêtes sur les deux tables en meme temps

    public function index()
    {
        ///???????????
        // ici on va chercher les produits dans la base de données
        // et on les envoie à la vue
        $produits = Produit_Carte::all();
        return response()->json(['produits' => $produits]);
    }

}
