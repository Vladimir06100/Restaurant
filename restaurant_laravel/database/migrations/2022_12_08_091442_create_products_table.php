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
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nom_product');
            $table->string('categorie');
            $table->float('prixHT');
            $table->float('prixTTC');
            $table->float('TVA');
          /*   $table->foreignIdFor(\App\Models\Restaurateur::class, 'restaurateur_id')
            ->constrained()
            ->onUpdate('RESTRICT')
            ->onDelete('RESTRICT'); */
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
        Schema::dropIfExists('produits');
    }
};
