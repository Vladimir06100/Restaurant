<?php

use App\Models\Produit;
use App\Models\Restaurant;
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
            $table->foreignIdFor(Produit::class, 'produit_id')
                ->constrained()
                ->onUpdate('RESTRICT')
                ->onDelete('RESTRICT');
            $table->foreignIdFor(Restaurant::class, 'restaurant_id')
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
