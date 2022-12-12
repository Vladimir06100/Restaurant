<?php

namespace Database\Seeders;

use App\Models\Carte;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Cartes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Carte::factory()->create([
            'nom_carte' => 'Carte 1',
            'restaurant_id' => 1,
        ]);
    }
}
