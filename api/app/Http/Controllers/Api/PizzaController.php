<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use App\Models\Pizza;

class PizzaController extends Controller
{

    //api/pizzas
    public function index()
    {
        $pizzas = Pizza::all();
        foreach ($pizzas as $pizza) {
            $pizza->ingredients = $pizza->getIngredients();
        }
        return $pizzas;
    }

    //api/pizzas
    public function store(Request $request)
    {
        $pizza = new Pizza();
        return $pizza;
    }

    // api/pizzas/{id}/ingredients
    public function getPizzaWithIngredients(string $id)
    {
        $pizza = Pizza::find($id);
        return $pizza->getIngredientsNamesArray();
    }

    public function getAllIngredients()
    {
        $ingredients = Ingredient::all();
        return $ingredients;
    }

    public function update(Request $request, string $id)
    {
    }

    public function destroy(string $id)
    {
    }
}
