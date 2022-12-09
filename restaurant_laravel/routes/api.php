<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\RestaurateurController;
use App\Http\Controllers\RestaurantController;

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

// routes pour les restaurateurs (inscription, connexion, profil)
Route::post('/restaurateurs', [RestaurateurController::class, 'store'])->name('restaurateurs.store');
Route::get('/restaurateurs/{id}', [RestaurateurController::class, 'show'])->name('restaurateurs.show');

// resource pour les restaurants (creation, affichage)
Route::resource('restaurants', RestaurantController::class);

// routes pour les produits (creation, affichage)
Route::resource('produits', ProduitController::class);



Route::post('/produits', [ProduitController::class, 'store'])->name('produits.store');
Route::get('/produits', [ProduitController::class, 'index'])->name('produits.index');
