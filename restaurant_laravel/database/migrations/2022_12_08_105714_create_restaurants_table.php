<?php

use Database\Seeders\Restaurateurs;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
//class restaurant
use App\Models\Restaurant;
//class restaurateur
use App\Models\Restaurateur;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('nom')->unique();
            $table->string('adresse');
            $table->time('heure_ouverture');
            $table->time('heure_fermeture');
            $table->string('image');
            // migration avec les clés étrangères (foreign keys) restaurateur_id 
            $table->foreignIdFor(Restaurateur::class)->constrained()->onDelete('restrict')->onUpdate('restrict');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('restaurants');
    }
};
