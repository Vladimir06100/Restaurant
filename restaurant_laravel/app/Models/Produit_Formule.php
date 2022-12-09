<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Produit_Formule extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $fillable = [
        'produit_carte_id',
        'formule_id',
    ];

    public function produit_carte()
    {
        return $this->belongsTo(Produit::class);
    }

    public function formule()
    {
        return $this->belongsTo(Formule::class);
    }
}
