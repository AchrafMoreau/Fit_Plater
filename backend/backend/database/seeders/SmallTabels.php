<?php

namespace Database\Seeders;

use App\Models\Allergy;
use App\Models\Goal;
use App\Models\Productivity;
use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SmallTabels extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Goal::factory(10)->create();
        Type::factory(10)->create();
        Productivity::factory(10)->create();
        Allergy::factory(10)->create();
    }
}
