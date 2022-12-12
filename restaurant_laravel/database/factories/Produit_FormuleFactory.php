<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produit_Formule>
 */
class Produit_FormuleFactory extends Factory
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
            'produit_id' => fake()->numberBetween(1, 10),
            'formule_id' => fake()->numberBetween(1, 10),
        ];
    }
}
