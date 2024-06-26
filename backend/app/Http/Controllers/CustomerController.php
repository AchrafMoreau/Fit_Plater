<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{

    public function index()
    {
        $Customers = Customer::with('Goals', 'Type', 'Allergy', 'Productivity')->get();
        if($Customers){
            return response($Customers);
        }else{
            return response([
                "message" => "No Customer Was Found!"
            ]);
        }

    }
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            "first_name" => 'required|string',
            "last_name" => 'string|nullable',
            "email" => "required|string|unique:customers,email",
            "password" => "required|string",
            "age" => "numeric|nullable",
            "gender" => "string|nullable",
            "height" => "numeric|nullable",
            "weight" => "numeric|nullable",
            "phone" => "string|nullable",
            "allergy_id" => "numeric|nullable",
            "productivity_id" => "numeric|nullable",
            "type_id" => "numeric|nullable",
            "goal_id" => "numeric|nullable",
            "MusclePercentage" => 'numeric|nullable',
            "FatPercentage" => 'numeric|nullable'
        ]);

        $validatedData['password'] = bcrypt($validatedData['password']);

        $customer = Customer::create($validatedData);

        $token = $customer->createToken('MyTokenApp')->plainTextToken;

        return response([
            "message" => "Customer registered successfully.",
            "token" => $token
        ], 201);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'string|required',
            'password' => 'string|required',
        ]);

        $customer = Customer::where("email", $validatedData['email'])->first();

        if (!$customer || !Hash::check($validatedData['password'], $customer->password)) {
            return response([
                'message' => "Invalid credentials.",
            ], 401);
        }

        $token = $customer->createToken('MyTokenApp')->plainTextToken;

        return response([
            'message' => 'Login successful.',
            'token' => $token,
            'customer_id' => $customer->id,
            'first_name' => $customer->first_name,
            "role" => $customer->role
        ]);
    }


    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            "message" => "Logged out successfully."
        ];
    }

    public function getUserData(Request $request, $customer_id)
    {
        $customer = Customer::find($customer_id);
    
        if (!$customer) {
            return response()->json([
                'message' => 'Customer not found.'
            ], 404);
        }
    
        return response()->json([
            'message' => 'Customer data retrieved successfully.',
            'customer' => $customer
        ], 200);
    }

    public function update(Request $request, $customer_id)
    {
        $customer = Customer::find($customer_id);
    
        if (!$customer) {
            return response()->json([
                'message' => 'Customer not found.'
            ], 404);
        }
    
        $validatedData = $request->validate([
            "first_name" => 'string|nullable',
            "last_name" => 'string|nullable',
            "email" => "string|nullable|unique:customers,email," . $customer->id,
            "password" => "string|nullable",
            "age" => "numeric|nullable",
            "gender" => "string|nullable",
            "height" => "numeric|nullable",
            "weight" => "numeric|nullable",
            "phone" => "string|nullable",
            "allergy_id" => "numeric|nullable",
            "productivity_id" => "numeric|nullable",
            "type_id" => "numeric|nullable",
            "goal_id" => "numeric|nullable",
            "MusclePercentage" => 'numeric|nullable',
            "FatPercentage" => 'numeric|nullable'
        ]);


        // update password
        // if (isset($validatedData['password'])) {
        //     $validatedData['password'] = bcrypt($validatedData['password']);
        // }
    
        $customer->update($validatedData);
    
        return response()->json([
            "message" => "Customer information updated successfully.",
            "customer" => $customer
        ], 200);
    }

    

    
}
