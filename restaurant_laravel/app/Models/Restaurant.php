<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Restaurant extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded =['id'];

    protected $hidden = [
        'restaurateur_id',
    ];

    protected $fillable = [
        'nom',
        'adresse',
        'heure_ouverture',
        'heure_fermeture',
        'image',
        'restaurateur_id',
    ];

    protected string $nom;
    protected string $adresse;
    protected string $heure_ouverture;
    protected string $heure_fermeture;
    protected string $image;
    protected int $restaurateur_id;

    public function restaurateur()
    {
        return $this->belongsTo(Restaurateur::class);
    }

}
