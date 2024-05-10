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

        Schema::create('types', function(Blueprint $tabel){
            $tabel->id('id');
            $tabel->string('type');
            $tabel->timestamps();
        });
        Schema::create('goals', function(Blueprint $tabel){
            $tabel->id('id');
            $tabel->string('goal');
            $tabel->timestamps();
        });
        Schema::create('productivities', function(Blueprint $tabel){
            $tabel->id('id');
            $tabel->string('productivity');
            $tabel->timestamps();
        });
        Schema::create('allergies', function(Blueprint $tabel){
            $tabel->id('id');
            $tabel->string('allergy');
            $tabel->timestamps();
        });
        Schema::create('customers', function(Blueprint $tabel){
            $tabel->id('id');
            $tabel->string('first_name');
            $tabel->string('last_name')->nullable();
            $tabel->string('email')->unique();
            $tabel->integer('age')->nullable();
            $tabel->integer('weight')->nullable();
            $tabel->integer('height')->nullable();
            $tabel->string('gender')->nullable();
            $tabel->string('phone')->nullable();
            $tabel->string('password');
            $tabel->foreignId('goal_id')->nullable()->constrained()->onDelete('cascade');
            $tabel->foreignId('type_id')->nullable()->constrained()->onDelete('cascade');
            $tabel->foreignId('productivity_id')->nullable()->constrained()->onDelete('cascade');
            $tabel->integer('FatPercentage')->nullable();
            $tabel->integer('MusclePercentage')->nullable();
            $tabel->foreignId('allergy_id')->nullable()->constrained()->onDelete('cascade');
            $tabel->timestamps();
        });

        



        Schema::create('elements', function(Blueprint $tabel){
            $tabel->id('id');
            $tabel->string('name')->uniqid();
            $tabel->string('image');
            $tabel->integer('calories');
            $tabel->integer('protien');
            $tabel->integer('carbohydrates');
            $tabel->integer('fat');
            $tabel->boolean('measuredByGram');
            $tabel->decimal('price');
            $tabel->timestamps();
        });


        Schema::create('meals', function(Blueprint $tabel){
            $tabel->id('id');
            // $tabel->foreignId('element_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $tabel->integer('total_calories');
            $tabel->integer('total_carbohydate');
            $tabel->integer('total_fat');
            $tabel->integer('total_protien');
            $tabel->decimal('meal_price');
            $tabel->timestamps();
        });

        Schema::create('meals_elements', function(Blueprint $tabel){
            $tabel->foreignId('element_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $tabel->foreignId('meal_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $tabel->integer("size");
            $tabel->timestamps();
        });

        Schema::create('orders', function(Blueprint $tabel){
            $tabel->id('id');
            $tabel->foreignId('customer_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $tabel->foreignId('meal_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
            $tabel->decimal('total_price');
            $tabel->boolean('confirmed');
            $tabel->timestamps();
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
