<?php

namespace Database\Seeders;

use App\Models\Formule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Formules extends Seeder
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
        Formule::factory()->count(10)->create();
    }
}
