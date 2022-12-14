<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Restaurateur extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;

    protected $guarded =['id'];

    protected $hidden = [
        'password',
        'remember_token',
        //'token',
    ];

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'password',
        'role',
        'remember_token',
    ];

    protected string $nom;
    protected string $prenom;
    protected string $password;
    protected string $role;

}
