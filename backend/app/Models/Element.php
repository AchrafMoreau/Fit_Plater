<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Element extends Model
{
    use HasFactory;
    protected $fillable = ['name', "image","calories","protein","carbohydrates" ,"fat", 'price', "measuredByGram"];

}
