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
        'nom_product',
        'catégorie',
        'prixHT',
        'prixTTC',
        'TVA',
        'restaurateur_id',
    ];

    protected string $nom_product;
    protected string $catégorie;
    protected float $prixHT;
    protected float $prixTTC;
    protected float $TVA;
    protected int $restaurateur_id;
}
