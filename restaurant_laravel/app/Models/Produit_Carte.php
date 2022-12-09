<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Produit_Carte extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $fillable = [
        'produit_id',
        'carte_id',
    ];

    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }

    public function carte()
    {
        return $this->belongsTo(Carte::class);
    }
}
