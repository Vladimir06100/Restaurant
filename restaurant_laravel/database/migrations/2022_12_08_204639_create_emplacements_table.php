<?php

use App\Models\Carte;
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
        Schema::create('emplacements', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            //$table->integer('client_id')->nullable();
            // foreign key carte_id
            $table->foreignIdFor(Carte::class, 'carte_id')
            ->constrained()
            ->onUpdate('RESTRICT')
            ->onDelete('RESTRICT');
            // foreign key restaurant_id
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
        Schema::dropIfExists('emplacements');
    }
};
