<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Produit extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $fillable = [
        'nom_produit',
        'categorie',
        'prixHT',
        'prixTTC',
        'TVA',
        'restaurateur_id',
    ];
}
