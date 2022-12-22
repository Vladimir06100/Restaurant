<?php

namespace App\Http\Controllers;

use App\Models\Restaurateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

// RegisterController 
class RestaurateurController extends Controller
{
    //affiche profile
    public function show($id)
    {
        $restaurateur = Restaurateur::find($id);
        return response()->json(['restaurateur' => $restaurateur]);
    }

    // connexion
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $restaurateur = Restaurateur::where('email', $request->email)->first();
        if (!$restaurateur || !Hash::check($request->password, $restaurateur->password)) {
            return response()->json([
                'message' => 'Email ou mot de passe incorrect.'
            ], 401);
        }

        $token = $restaurateur->createToken("authToken");

        return response()->json([
            'message' => 'Connexion réussi.',
            'prenom' => $restaurateur->prenom,
            'role' => $restaurateur->role,
            'ID' => $restaurateur->id,
            'remember_token' => $token->plainTextToken
        ], 200);

        redirect()->route('produits');
    }

    // creation profile
    public function register(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string',
            'role' => 'required|string'
        ]);

        // $token = Str::random(60);
        $restaurateur = Restaurateur::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            //'token' => hash('sha256', $token),
            'role' => $request->role
        ]);
        return response()->json([
            'message' => 'Restaurateur created.',
            'restaurateur' => $restaurateur,
            //'token' => $token,
        ], 201);
    }

    // modification profile
    public function update(Request $request, $id)
    {
        $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string'
        ]);
        $restaurateur = Restaurateur::find($id);
        $restaurateur->update($request->all());
        return response()->json([
            'message' => 'Restaurateur modifier.',
            'restaurateur' => $restaurateur
        ], 200);
    }

    // suppression profile
    public function delete($id)
    {
        $restaurateur = Restaurateur::find($id);
        $restaurateur->delete();
        return response()->json([
            'message' => 'Restaurateur supprimer.',
            'restaurateur' => $restaurateur
        ], 200);
    }

    // Affiche un restaurant
    public function profile($id)
    {
        $restauranteur = Restauranteur::find($id);
        return response()->json(['restauranteur' => $restauranteur]);
    }
}
