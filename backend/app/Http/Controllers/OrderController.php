<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    //

    public function order(Request $request)
    {
        $meal = $request->validate([
            "element" => "array",
            "price" => "numeric",
            "fat"  => "numeric",
            "protien" => "numeric",
            "cal "=> "numeric",
            "carbo" => "numeric",
        ]);

        return $meal;
        
    }
}
