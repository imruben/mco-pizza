<?php

use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PizzaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(OrderController::class)->group(function () {
    Route::get('/orders',  'index');
    Route::post('/orders', 'store');
    Route::get('/orders/{id}', 'show');
    // Route::put('/orders/{id}', 'update');
    // Route::delete('orders/{id}', 'destroy');
});

Route::controller(PizzaController::class)->group(function () {
    Route::get('/pizzas',  'index');
    Route::get('/pizzas/ingredients', 'getAllIngredients');
    Route::get('/pizzas/{id}/ingredients', 'getPizzaWithIngredients');

    // Route::get('/pizzas/price',  'index');




    // Route::post('/pizzas', 'store');

    // Route::put('/pizzas/{id}', 'update');
    // Route::delete('pizzas/{id}', 'destroy');
    // Route::post('/pizzas/{id}/ingredients', 'addIngredient');
});
