<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ingredient;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $ingredients = [
            [
                'name' => "tomato",
                'price' => 0.50,
                'image_url' => 'tomato.png'
            ],
            [
                'name' => "sliced mushrooms",
                'price' => 0.50,
                'image_url' => 'sliced_mushrooms.png'
            ],
            [
                'name' => "feta cheese",
                'price' => 1.00,
                'image_url' => 'feta_cheese.png'
            ],
            [
                'name' => "sausages",
                'price' => 1.00,
                'image_url' => 'sausages.png'
            ],
            [
                'name' => "sliced onion",
                'price' => 0.50,
                'image_url' => 'sliced_onion.png'
            ],
            [
                'name' => "mozzarella cheese",
                'price' => 0.50,
                'image_url' => 'mozarrella_cheese.png'
            ],
            [
                'name' => "oregano",
                'price' => 1.00,
                'image_url' => 'oregano.png'
            ], [
                'name' => "bacon",
                'price' => 1.00,
                'image_url' => 'bacon.png'
            ],
        ];

        foreach ($ingredients as $ingredient) {
            Ingredient::factory()->create($ingredient);
        }
    }
}
