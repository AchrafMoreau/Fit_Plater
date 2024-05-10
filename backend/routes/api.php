<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\MealController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public Routes
Route::get("element", [ElementController::class, 'index']);
Route::get("element/{element}", [ElementController::class, 'show']);
Route::get('element/search/{name}', [ElementController::class, 'search']);
// Route::resource('')

// auth Routes-----
Route::post("register", [CustomerController::class, 'register']);
Route::post("login", [CustomerController::class, 'login']);

// Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function (){
    Route::post("element", [ElementController::class, 'store']);
    Route::delete("element/{element}", [ElementController::class, 'destroy']);
    Route::put("element/{element}", [ElementController::class, 'update']);
    Route::get("Recommendation", [MealCon::class, 'Recommendation']);
    Route::post("order", [OrderController::class, 'order']);    
    Route::resource("meal", MealController::class);
    // Route::post("meal", [MealController::class, 'store']);
});

// Route::resource("element", ElementController::class);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
