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
            'nom_produit' => fake()->company(),
            'categorie_id' => fake()->numberBetween(1, 4),
            'description' => fake()->text(20),
            'prixHT' => fake()->randomFloat(2, 0, 10),
            'TVA' => fake()->randomFloat(10, 5.5, 20),
            'prixTTC' => fake()->randomFloat(20, 0, 100),
            'quantite' => fake()->numberBetween(1,20),
            'restaurateur_id' => fake()->randomNumber(1, 10),
        ];
    }
}
