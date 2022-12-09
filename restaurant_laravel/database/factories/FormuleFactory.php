<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Formule>
 */
class FormuleFactory extends Factory
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
            'nom_formule' => fake()->word(),
            'prix' => fake()->numberBetween(1, 10),
            'description' => fake()->text(),
            'entree' => fake()->word(1),
            'plat' => fake()->word(1),
            'dessert' => fake()->word(1),
            'produit_carte_id' => fake()->numberBetween(1, 10),
        ];
    }
}
