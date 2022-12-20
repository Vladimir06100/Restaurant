<?php

namespace Database\Seeders;

use Database\Factories\Categorie_FormuleFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Categorie_Formule extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Categorie_FormuleFactory::factory()->count(3)->create();
    }
}
