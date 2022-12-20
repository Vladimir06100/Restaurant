<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie_Formule extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    protected $fillable = [
        'formule1' =>['entree', 'plat', 'dessert'],
        'formule2' => ['plat', 'dessert'],
        'formule3' => ['entree', 'plat']
    ];

    private string $formule1;
    private string $formule2;
    private string $formule3;

}
