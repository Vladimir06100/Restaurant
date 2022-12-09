<?php

namespace Database\Seeders;

use App\Models\Produit_Formule;
use Illuminate\Database\Seeder;


class Produit_Formules extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // create 10 random formules
        Produit_Formule::factory()->count(10)->create();
    }
}
