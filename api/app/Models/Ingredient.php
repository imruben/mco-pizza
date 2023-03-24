<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'price',
    ];

    public function pizza()
    {
        return $this->belongsToMany(Pizza::class);
    }

    public function pizzasIngredients()
    {
        return $this->hasMany(PizzasIngredients::class);
    }
}
