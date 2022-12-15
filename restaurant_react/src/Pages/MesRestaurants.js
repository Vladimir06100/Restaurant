import React, { useEffect, useState } from'react';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';
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
        <div>

            <Menu />

            <div class="MesRestaurants">

                <h1>Mes Restaurants</h1>

                    {restaurants.map((restaurant) => (
    
                        <div class="container">

                            <div class="image-box">
                                <div class="images"><img class="images" src={restaurant.image} width="25%"/></div>
                            </div>
                        <div class="text">
                            <h2 class="title">{restaurant.nom}</h2>
                            <button type="button" name="item-1-button" id="item-1-button">Modifier</button>
                        </div>

                        </div>
))}
            </div>

            <Footer />

        </div>
        
        )
}
export default MesRestaurants;