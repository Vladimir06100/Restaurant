<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Restaurateur extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded =['id'];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'password',
        'remember_token',
    ];

    protected string $nom;
    protected string $prenom;
    protected string $email;
    protected string $password;
}
