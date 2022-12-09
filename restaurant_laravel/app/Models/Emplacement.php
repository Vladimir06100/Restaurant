<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Emplacement extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $fillable = [
        'carte_id',
        'restaurant_id',        
    ];

    public function carte()
    {
        return $this->belongsTo(Carte::class);
    }

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }


}
