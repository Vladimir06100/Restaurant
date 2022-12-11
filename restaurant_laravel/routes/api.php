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

// routes pour les restaurateurs (inscription, profil)
Route::post('/restaurateurs', [RestaurateurController::class, 'store'])->name('restaurateurs.store');
Route::get('/restaurateurs/{id}', [RestaurateurController::class, 'show'])->name('restaurateurs.show');

// routes pour la connexion des restaurateurs
Route::post('/restaurateurs/login', [RestaurateurController::class, 'login'])->name('restaurateurs.login');

// resource pour les restaurants les 7 routes
Route::resource('restaurants', RestaurantController::class);

// routes pour les produits les 7 routes
Route::resource('produits', ProduitController::class);
