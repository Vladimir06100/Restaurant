<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formules', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nom_formule');
            $table->string('description_formule');
            $table->string('categorie_produit_entree');
            $table->string('categorie_produit_plat');
            $table->string('categorie_produit_dessert');
            $table->string('prix_formule');
            $table->string('votre_prix');
            $table->foreignIdFor(\App\Models\Carte::class, 'carte_id')
                ->constrained()
                ->onUpdate('RESTRICT')
                ->onDelete('RESTRICT');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('formules');
    }
};
