<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Meal;
use App\Models\Element;

class meals_element extends Model
{
    use HasFactory;
    protected $fillable = ["element_id","meal_id","size"];

    public  function mealId()
    {
        return $this->hasMany(Meal::class, 'meal_id');
    }

    public function elementId()
    {
        return $this->hasMany(Element::class, 'element_id');
    }

}
