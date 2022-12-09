<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Restaurant>
 */
class RestaurantFactory extends Factory
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
            'nom' => fake()->name(),
            'adresse' => fake()->address(),
            'heure_ouverture' => fake()->time(),
            'heure_fermeture' => fake()->time(),
            'image' => fake()->imageUrl(),
            'restaurateur_id' => fake()->numberBetween(1, 10),
        ];
    }
}
