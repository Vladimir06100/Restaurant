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
        'categorie_id',
        'prixHT',
        'prixTTC',
        'TVA',
        'quantite',
        'restaurateur_id',
    ];

    protected string $nom_produit;
    protected string $categorie;
    protected float $prixHT;
    protected float $prixTTC;
    protected float $TVA;
    protected int $restaurateur_id;
}
