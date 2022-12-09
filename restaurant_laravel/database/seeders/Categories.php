<?php

namespace Database\Seeders;

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
        \App\Models\Categorie::factory()->create(['type' => 'entree']);
        \App\Models\Categorie::factory()->create(['type' => 'plat']);
        \App\Models\Categorie::factory()->create(['type' => 'dessert']);
        \App\Models\Categorie::factory()->create(['type' => 'boisson']);
    }
}
