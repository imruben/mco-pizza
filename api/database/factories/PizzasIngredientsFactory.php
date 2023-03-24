<?php

namespace Database\Factories;

use App\Models\Ingredient;
use App\Models\Pizza;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PizzasIngredients>
 */
class PizzasIngredientsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'pizza_id' => Pizza::all()->random()->id,
            'ingredient_id' => Ingredient::all()->random()->id,
        ];
    }
}
