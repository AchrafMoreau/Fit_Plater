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
        Schema::create('customers', function(Blueprint $tabel){
            $uuid = DB::raw('UUID()');
            $tabel->uuid('id')->primary()->default($uuid);
            $tabel->string('first_name');
            $tabel->string('last_name');
            $tabel->string('email')->uniqid();
            $tabel->integer('age');
            $tabel->integer('wight');
            $tabel->string('gender');
            $tabel->string('phone');
            $tabel->string('password');
            $tabel->string('goal');
            $tabel->string('typeGym');
            $tabel->string('ActivityLevel');
            $tabel->integer('FatPercentage');
            $tabel->integer('MusclePercentage');
            $tabel->string('allergies');
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
    }
};
