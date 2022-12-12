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
        'description_formule',
        'entree',
        'plat',
        'dessert',
        'prix_formule',
        'votre_prix',
    ];

    private string $nom_formule;
    private string $description_formule;
    private string $entree;
    private string $plat;
    private string $dessert;
    private float $prix_formule;
    private float $votre_prix;
    
    public function produits()
    {
        return $this->belongsToMany(Produit::class);
    }

}
