<?php

namespace Database\Seeders;

use App\Models\Categorie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Categories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // creation 4 categories non modifiables pour entre plat dessert et boisson
        Categorie::factory()->create([
            'type' => 'entree',
        ]);
        Categorie::factory()->create([
            'type' => 'plat',
        ]);
        Categorie::factory()->create([
            'type' => 'dessert',
        ]);
        Categorie::factory()->create([
            'type' => 'boisson',
        ]);

    }
}
