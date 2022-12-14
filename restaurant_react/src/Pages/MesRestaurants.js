import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import { Link } from "react-router-dom";
import "../Styles/MesRestaurants.css";

function MesRestaurants() {
    const [restaurants, setRestaurants] = useState([]);

    async function getRestaurants() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        };

        const response = await fetch('http://127.0.0.1:8000/api/restaurants', options);
        const data = await response.json();
        const restaurants = data.restaurants;
        setRestaurants(restaurants);
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    return (
        <div>
            <Menu />
            <div className="MesRestaurants">
                <h1>Mes Restaurants</h1>
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="container">
                        <div className="image-box">
                            <div className="images"><img className='images' src={restaurant.image} width="25%" alt='img' /></div>
                        </div>
                        <div className="text">
                            <h2 className="title">{restaurant.nom}</h2>
                            <button><Link to={"/details/restaurant/" + restaurant.id}>Voir</Link></button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default MesRestaurants;
