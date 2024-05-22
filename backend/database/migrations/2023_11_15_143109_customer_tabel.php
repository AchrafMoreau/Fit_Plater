<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('types', function(Blueprint $table){
            $table->id();
            $table->string('type');
            $table->timestamps();
        });
        Schema::create('goals', function(Blueprint $table){
            $table->id();
            $table->string('goal');
            $table->timestamps();
        });
        Schema::create('productivities', function(Blueprint $table){
            $table->id();
            $table->string('productivity');
            $table->timestamps();
        });
        Schema::create('allergies', function(Blueprint $table){
            $table->id();
            $table->string('allergy');
            $table->timestamps();
        });
        Schema::create('customers', function(Blueprint $table){
            $table->id();
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->integer('age')->nullable();
            $table->integer('weight')->nullable();
            $table->integer('height')->nullable();
            $table->string('gender')->nullable();
            $table->string('phone')->nullable();
            $table->string('password');
            $table->foreignId('goal_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('type_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('productivity_id')->nullable()->constrained()->onDelete('cascade');
            $table->integer('FatPercentage')->nullable();
            $table->integer('MusclePercentage')->nullable();
            $table->foreignId('allergy_id')->nullable()->constrained()->onDelete('cascade');
            $table->timestamps();
        });


        Schema::create('elements', function(Blueprint $table){
            $table->id();
            $table->string('name')->uniqid();
            $table->string('image');
            $table->integer('calories');
            $table->integer('protein');
            $table->integer('carbs');
            $table->integer('fat');
            $table->boolean('measuredByGram');
            $table->decimal('price');
            $table->timestamps();
        });


        Schema::create('meals', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('element_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->string('category')->nullable();
            $table->string('image');
            $table->integer('calories');
            $table->integer('protein');
            $table->integer('carbs'); // Corrected typo from 'total_carbohydate' to 'total_carbohydrate'
            $table->integer('fat');
            $table->decimal('price', 8, 2); // Added precision and scale for decimal
            $table->timestamps();
        });
        
        Schema::create('meals_elements', function(Blueprint $table){
            $table->id();
            $table->foreignId('meal_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('element_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->integer("size");
            $table->timestamps();
        });

        Schema::create('orders', function(Blueprint $table){
            $table->id();
            $table->foreignId('customer_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('meal_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $table->decimal('total_price');
            $table->boolean('confirmed');
            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer');
        Schema::dropIfExists('productivities');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('meals');
        Schema::dropIfExists('elements');
        Schema::dropIfExists('goals');
        Schema::dropIfExists('types');
        Schema::dropIfExists('allergies');
    }
};
