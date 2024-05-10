<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\meals_element;

class Meal extends Model
{
    use HasFactory;
    protected $fillable = ["total_calories","total_carbohydate","total_fat","total_protien","meal_price"];
    public function mealElement()
    {
        return $this->belongsTo(meals_element::class, 'meal_id');
    }

}
