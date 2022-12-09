<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            Restaurateurs::class
        ]);
        $this->call([
            Restaurants::class
        ]);
        $this->call([
            Produits::class
        ]);
        $this->call([
            Formules::class
        ]);
        $this->call([
            Produit_Formule::class
        ]);
        $this->call([
            Produit_Cartes::class
        ]);
        $this->call([
            Emplacements::class
        ]);
        $this->call([
            Cartes::class
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
