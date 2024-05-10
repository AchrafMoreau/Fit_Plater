<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meal;
use App\Models\Elemenet;
use App\Models\Customer;

class MealController extends Controller
{
    //

    public function Recommendation(Request $req)
    {
        $user = Customer::find($req->id);
        
        $age = $user->age(); 
        $height = $user->height();
        $weight = $user->weight();
        $fat = $user->fat();
        $goad = $user->goal();
        $type_of_sport = $user->type();
        $musc = $user->musclePersentage();
        $allergy = $user->allergy();

        // some calculate of how can reache the goal 
        // and give some how much hi need for fat, calories, protine
        // finaly make some element that give as all we need
        // return the meal

        

    }
}
