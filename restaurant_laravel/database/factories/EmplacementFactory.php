<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Emplacement>
 */
class EmplacementFactory extends Factory
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
            'restaurant_id' => fake()->numberBetween(1, 10),
            'carte_id' => fake()->numberBetween(1, 10),
            
        ];
    }
}
