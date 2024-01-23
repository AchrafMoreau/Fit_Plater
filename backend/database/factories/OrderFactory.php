<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Meal;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "customer_id" => Customer::inRandomOrder()->first()->id,
            "meal_id" => Meal::inRandomOrder()->first()->id,
            "total_price" => $this->faker->numberBetween(0, 10000),
            "confirmed" => $this->faker->boolean()
        ];
    }
}
