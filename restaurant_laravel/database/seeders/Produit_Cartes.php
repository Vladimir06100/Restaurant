<?php

namespace Database\Seeders;

use App\Models\Produit_Carte;
use Illuminate\Database\Seeder;

class Produit_Cartes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create 10 Produit_Cartes
        // \App\Models\Produit_Carte::factory()->count(10)->create();
        Produit_Carte::factory()->count(10)->create();
    }
}
