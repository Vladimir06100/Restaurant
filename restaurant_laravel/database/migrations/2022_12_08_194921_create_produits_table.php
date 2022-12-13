<?php

use App\Models\Categorie;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
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
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('nom_produit');
            $table->foreignIdFor(Categorie::class, 'categorie_id')
                ->constrained()
                ->onUpdate('RESTRICT')
                ->onDelete('RESTRICT');
            $table->text('description');
            $table->float('prixHT');
            $table->float('prixTTC');
            $table->float('TVA');
            $table->integer('quantite');
            $table->foreignIdFor(Restaurateur::class, 'restaurateur_id')
                ->constrained()
                ->onUpdate('RESTRICT')
                ->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produits');
    }
};
