<?php

namespace Database\Seeders;

use App\Models\PizzasIngredients;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PizzasIngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $pizzasingredients = [
            [
                'pizza_id' => '1',
                'ingredient_id' => '1',
            ], [
                'pizza_id' => '1',
                'ingredient_id' => '2',
            ], [
                'pizza_id' => '1',
                'ingredient_id' => '3',
            ], [
                'pizza_id' => '1',
                'ingredient_id' => '4',
            ], [
                'pizza_id' => '1',
                'ingredient_id' => '5',
            ], [
                'pizza_id' => '1',
                'ingredient_id' => '6',
            ], [
                'pizza_id' => '1',
                'ingredient_id' => '7',
            ], [
                'pizza_id' => '2',
                'ingredient_id' => '1',
            ], [
                'pizza_id' => '2',
                'ingredient_id' => '8',
            ], [
                'pizza_id' => '2',
                'ingredient_id' => '6',
            ], [
                'pizza_id' => '2',
                'ingredient_id' => '2',
            ], [
                'pizza_id' => '2',
                'ingredient_id' => '7',
            ]

        ];

        foreach ($pizzasingredients as $pizzasingredient) {
            PizzasIngredients::factory()->create($pizzasingredient);
        }
    }
}
