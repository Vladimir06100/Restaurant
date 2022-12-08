<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Carte_Table extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $fillable = [
        'carte_id',
        'table_id',
       
       
    ];
}
