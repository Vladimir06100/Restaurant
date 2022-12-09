<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Produit_CartesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // ici c'est la factory de la table Produit_Cartes
            'produit_id' => fake()->numberBetween(1, 10),
            'carte_id' => fake()->numberBetween(1, 10),
        ];
    }
}
