<?php

namespace Database\Factories;

use App\Models\Pizza;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'order_status' => fake()->randomElement(['delivered', 'cancelled']),
            'total_price' => fake()->randomFloat(2, 0, 100),
            'user_id' => "1",
            'created_at' => fake()->dateTimeBetween('-1 year', '-1 month'),
        ];
    }
}
