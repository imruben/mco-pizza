<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'amount',
        'price',
        'ingredients',
        'order_id'
    ];

    public function order()
    {
        return $this->belongsToMany(Order::class);
    }

    public function pizzaingredients()
    {
        return $this->hasMany(PizzasIngredients::class);
    }

    public function getIngredients()
    {
        $ingredients = $this->pizzaingredients;
        $pizzaIngredientsName = [];
        foreach ($ingredients as $ingredient) {
            $ingredient =  Ingredient::find($ingredient->ingredient_id);

            array_push($pizzaIngredientsName, [
                "id" => $ingredient->id,
                "name" => $ingredient->name,
                "price" => $ingredient->price,
                "image_url" => $ingredient->image_url,
            ]);
        }
        return $pizzaIngredientsName;
    }

    public function getIngredientsNamesArray()
    {
        $ingredients = $this->pizzaingredients;
        $pizzaIngredientsName = [];
        foreach ($ingredients as $ingredient) {
            $ingredient =  Ingredient::find($ingredient->ingredient_id);
            array_push($pizzaIngredientsName, $ingredient->name);
        }
        return $pizzaIngredientsName;
    }
}
