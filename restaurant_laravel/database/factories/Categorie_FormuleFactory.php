<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Categorie_Formule>
 */
class Categorie_FormuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //
            
            'formule1' => fake()->word('entree', 'plat', 'dessert'),
            'formule2' => fake()->word('plat', 'dessert'),
            'formule3' => fake()->word('entree', 'plat'),

            
        ];
    }
}
