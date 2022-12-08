<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QRcode extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $fillable = [
        'lien_qr',
        'table_id',
    ];
}
