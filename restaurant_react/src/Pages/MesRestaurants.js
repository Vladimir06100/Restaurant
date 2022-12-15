import React, { useEffect, useState } from'react';
import "../Styles/MesRestaurants.css"

function MesRestaurants() {

    const [restaurants, setRestaurants] = useState([]);

    async function getRestaurants() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let response = await fetch('http://127.0.0.1:8000/api/restaurants', options);
        const data = await response.json();
        console.log(data);
        const restaurants = data.restaurants;
        setRestaurants(restaurants);
    }

    useEffect(() => {
        getRestaurants();
    }
        , []);
//categorie_id,

    return (

        <div class="MesRestaurants">

            <h1>Mes Restaurants</h1>

                {restaurants.map((restaurant) => (

                    <div>
                        {restaurant.nom}
                        {restaurant.adresse}
                        {restaurant.image}
                        {restaurant.heure_ouverture}
                        {restaurant.heure_fermeture}
                    </div>
                                
                ))}
        
        </div>
            
        )
}
export default MesRestaurants;