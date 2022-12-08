<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Formule extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $fillable = [
        'nom_formule',
        'prix_formule',
        'description_formule',
        'entree',
        'plat',
        'dessert',
        'produit_carte_id',
    ];
}
