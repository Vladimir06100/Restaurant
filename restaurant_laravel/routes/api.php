<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CarteController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FormuleController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\RestaurateurController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\PasswordResetLinkController;
use App\Http\Controllers\NewPasswordController;
use Database\Seeders\Restaurants;

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


// Route pour la connexion des restaurateurs
Route::post('/restaurateurs/login', [RestaurateurController::class, 'login'])->name('restaurateurs.login');


// Route pour l'inscription
Route::post('/restaurateurs/register', [RestaurateurController::class, 'register'])->name('restaurateurs.register');


// Envoi d'un email de confirmation pour changer le mot de passe
Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])->name('api.password.email');


// Page de changement de mot de passe
Route::post('/reset-password', [NewPasswordController::class, 'store'])->name('api.password.reset');


// Route pour les restaurants (côté restaurateur)
Route::middleware('auth:sanctum')->resource('/restaurateurs/restaurants', RestaurantController::class);


// Routes pour les produits
Route::middleware('auth:sanctum')->resource('produits', ProduitController::class);


Route::resource('cartes', CarteController::class);

/* // routes pour ajouter un produit a la carte
Route::post('/cartes', [CarteController::class, 'store'])->name('cartes.store');
 */
/* // affichage de la carte
Route::get('/cartes', [CarteController::class, 'index'])->name('cartes.index'); */

// afficher produits par restaurateur_id



// route pour les formules
Route::resource('formules', FormuleController::class);


// Route pour les admins
Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');