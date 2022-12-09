<?php

namespace Database\Seeders;

use App\Models\Emplacement;
use Illuminate\Database\Seeder;

class Emplacements extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create 10 random emplacements
        Emplacement::factory()->count(10)->create();
    }
}
