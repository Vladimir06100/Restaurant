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
        Schema::create('cartes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('nom_carte');
            $table->foreignIdFor(\App\Models\Produit::class, 'produit_id')
                ->nullable()
                ->constrained()
                ->onUpdate('RESTRICT')
                ->onDelete('RESTRICT');
            $table->foreignIdFor(\App\Models\Restaurant::class, 'restaurant_id')
                ->nullable()
                ->constrained()
                ->onUpdate('RESTRICT')
                ->onDelete('RESTRICT');
            $table->foreignIdFor(\App\Models\Formule::class, 'formule_id')
                ->nullable()
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
        Schema::dropIfExists('cartes');
    }
};
