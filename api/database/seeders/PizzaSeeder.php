<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Pizza;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pizza::factory()->create([
            'name' => 'The Fun Pizza',
            'order_id' => Order::all()->random()->id,
            'price' => '5.00',
        ]);
        Pizza::factory()->create([
            'name' => 'The Super Mushroom Pizza',
            'order_id' => Order::all()->random()->id,
            'price' => '3.50',
        ]);
        // Pizza::factory()->create([
        //     'name' => 'Custom Pizza',
        //     'order_id' => Order::all()->random()->id,
        //     'amount' => fake()->numberBetween(1, 10),
        //     'price' => '3.00',
        // ]);
    }
}
