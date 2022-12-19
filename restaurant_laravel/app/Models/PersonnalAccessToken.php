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
        'tokenable_id',
        'name',
        'token',
        //'token',
    ];

    protected $fillable = [
        'tokenable_id',
        'name',
        'token',
    ];

    protected string $tokenable_id;
    protected string $name;
    protected string $token;
}
