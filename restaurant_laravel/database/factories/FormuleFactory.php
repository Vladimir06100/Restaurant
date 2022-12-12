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
            'description_formule' => fake()->text(100),
            'categorie_produit_entree' => fake()->word('entree'),
            'categorie_produit_plat' => fake()->word('plat'),
            'categorie_produit_dessert' => fake()->word('dessert'),
            'prix_formule' => fake()->randomFloat(2, 1, 100),
            'votre_prix' => fake()->randomFloat(2, 1, 100),
            'carte_id' => fake()->numberBetween(1, 10),
        ];
    }
}
