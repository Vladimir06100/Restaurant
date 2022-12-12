<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Carte>
 */
class CarteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // create 10 random cartes
            'nom_carte' => fake()->name(),
            // add produit_id x10
            'produit_id' => fake()->numberBetween(1, 10),
            'restaurant_id' => fake()->numberBetween(1, 10),
        ];
    }
}
