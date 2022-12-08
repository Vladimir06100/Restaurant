<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Models\Contact;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/contacts', [ContactController::class, 'store'])->name('contacts.store');

Route::get('/contacts', [ContactController::class, 'index'])->name('contacts.index');

Route::post('/produits', [ProduitController::class, 'store'])->name('produits.store');
Route::get('/produits', [ProduitController::class, 'index'])->name('produits.index');
