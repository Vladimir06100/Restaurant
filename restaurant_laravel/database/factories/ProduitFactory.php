<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProduitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // ici on va définir les valeurs par défaut de nos colonnes
            'nom_product' => fake()->company(),
            'catégorie' => fake()->name(),
            'prixHT' => fake()->randomFloat(2, 0, 100),
            'prixTTC' => fake()->randomFloat(2, 0, 100),
            'TVA' => fake()->randomFloat(20, 5.5, 20),
            'restaurateur_id' => fake()->randomNumber(1, 10),

        ];
    }
}
