<?php

namespace Database\Factories;

use App\Models\Element;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MealFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "total_calories" => $this->faker->numberBetween(1, 100),
            "total_carbohydate" => $this->faker->numberBetween(1, 100),
            "total_fat" => $this->faker->numberBetween(1, 100),
            "total_protein" => $this->faker->numberBetween(1, 100),
            "meal_price" => $this->faker->numberBetween(0,10000),
            "element_id" => Element::inRandomOrder()->first()->id
        ];
    }
}
