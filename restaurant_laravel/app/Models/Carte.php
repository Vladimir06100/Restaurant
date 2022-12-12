<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Carte extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $fillable = [
        'nom_carte',
        'carte_id',
        'restaurant_id',
        'formule_id',
    ];

    private string $nom_carte;
    private int $carte_id;
    private int $restaurant_id;
    private int $formule_id;


    public function produits()
    {
        return $this->belongsToMany(Produit::class);
    }

    public function restaurants()
    {
        return $this->belongsToMany(Restaurant::class);
    }

    public function formules()
    {
        return $this->belongsToMany(Formule::class);
    }

    public function cartes()
    {
        return $this->belongsToMany(Carte::class);
    }
}
