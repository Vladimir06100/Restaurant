<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Restaurateur>
 */
class RestaurateurFactory extends Factory
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
            'prenom' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'password' => fake()->password(),
            //Hash a la fin
            //'password' => Hash::make(Str::random(10)), // password pas de droits de stockage en clair
            //'token' => Str::random(10),
            'role' => 'restaurateur',
        ];
    }
}
