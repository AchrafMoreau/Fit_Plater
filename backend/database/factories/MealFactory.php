<?php

namespace Database\Factories;

<<<<<<< HEAD
use App\Models\Element;
=======
use App\Models\Customer;
use App\Models\Meal;
>>>>>>> 82eeeef3ab591b338b24b193def7111682a3f646
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
<<<<<<< HEAD
class MealFactory extends Factory
=======
class OrderFactory extends Factory
>>>>>>> 82eeeef3ab591b338b24b193def7111682a3f646
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
<<<<<<< HEAD
            "total_calories" => $this->faker->numberBetween(1, 100),
            "total_carbohydate" => $this->faker->numberBetween(1, 100),
            "total_fat" => $this->faker->numberBetween(1, 100),
            "total_protien" => $this->faker->numberBetween(1, 100),
            "meal_price" => $this->faker->numberBetween(0,10000),
            "element_id" => Element::inRandomOrder()->first()->id
=======
            "customer_id" => Customer::inRandomOrder()->first()->id,
            "meal_id" => Meal::inRandomOrder()->first()->id,
            "total_price" => $this->faker->numberBetween(0, 10000),
            "confirmed" => $this->faker->boolean()
>>>>>>> 82eeeef3ab591b338b24b193def7111682a3f646
        ];
    }
}
