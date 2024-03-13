<?php

namespace App\Http\Controllers;

use App\Models\Customer;
// use App\Models\customers;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    //
    use HasApiTokens, HasFactory, Notifiable;

    
    public function register(Request $req)
    {

        $fildes = $req->validate([
            "first_name" => 'required|string',
            "last_name" => 'string',
            "email" => "required|string|unique:customers,email",
            "password" => "required|string|confirmed",
            "age" => "numeric",
            "gender" => "string",
            // "height" => "numeric", ...need to add after
            "wight" => "numeric", // it's weight not wight(in db)
            "phone" => "string",
            "allergy_id" => "numeric",
            "productivity_id" => "numeric",
            "type_id" => "numeric",
            "goal_id" => "numeric",
            "MusclePercentage" => 'numeric',
            "FatPercentage" => 'numeric'
        ]);

        // $customer = Customer::create([
        //     "first_name" => $fildes['first_name'],
        //     "last_name" => $fildes['last_name'],
        //     "email" => $fildes['email'],
        //     "password" => $fildes['password'],
        //     "age" => $fildes['age'],
        //     "gender" => $fildes['gender'],
        //     // "height" => "number", ...need to add after
        //     "wight" => $fildes['wight'], // it's weight not wight
        //     "phone" => $fildes['phone'],
        //     "allergy_id" => $fildes['allergy_id'],
        //     "productivity_id" => $fildes['productivity_id'],
        //     "type_id" => $fildes['type_id'],
        //     "goal_id" => $fildes['goal_id'],
        //     "MusclePercentage" => $fildes['MusclePercentage'],
        //     "FatPercentage" => $fildes['FatPercentage']
        // ]);

        $customer = Customer::create($req->all());
        $token = $customer->createToken('MyTokenApp')->plainTextToken;

        $response = [
            "customer" => $customer,
            'token' => $token
        ];

        return response($response, 201);
    }


    public function login(Request $req)
    {
        $fildes = $req->validate([
            'first_name' => 'string|required',
            'email' => 'string|required',
            'password' => 'string|required',
        ]);

        $customer = Customer::create($req->all());
        $token = $customer->createToken("myapptoken")->plainTextToken;

        $res = [
            'customer'=> $customer,
            'token'=> $token
        ];
        return response($res);
    }

}
