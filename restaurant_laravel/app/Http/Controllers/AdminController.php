<?php

namespace App\Http\Controllers;

use App\Models\Restaurateur;
use Illuminate\Http\Request;
Use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function index()
    {
        $restaurateurs = Restaurateur::all();
        return response()->json([
            'restaurateurs' => $restaurateurs
        ]);
    }

    public function destroy(Restaurateur $restaurateur)
    {
        $restaurateur->DB::delete('delete from restaurateurs');

        return response()->json([
            'message' => 'Le restaurateur a été supprimé.',
            'liste_des_restaurateurs'=> DB::table('restaurateurs')
            ->where('restaurateur.id','=',$restaurateur)
            ->get()   
        ]);
    }
}
