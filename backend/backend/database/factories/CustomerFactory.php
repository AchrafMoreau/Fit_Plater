<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "first_name" => $this->faker->sentence(),
            "last_name" => $this->faker->sentence(),
            "email" => $this->faker->sentence(),
            "age" => $this->faker->numberBetween(10, 100),
            "wight" => $this->faker->numberBetween(20, 500),
            "gender" => $this->faker->sentence(),
            "phone" => $this->faker->sentence(),
            "goal" => $this->faker->sentence(),
            "typeGym" => $this->faker->sentence(),
            "activityLevel" => $this->faker->sentence(),
            "MusclePercentage" => $this->faker->numberBetween(0, 100),
            "FatPercentage" => $this->faker->numberBetween(0, 100),
            "allergies" => $this->faker->sentence(),
        ];
    }
}
