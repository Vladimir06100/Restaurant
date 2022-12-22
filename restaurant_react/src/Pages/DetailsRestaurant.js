import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';
import { Link ,useParams } from 'react-router-dom';

function DetailsRestaurant() {

    const [restaurant, setRestaurant] = useState([]);
    const {id} = useParams();

    async function getRestaurant(id) {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        };

        const response = await fetch('http://127.0.0.1:8000/api/restaurants/' + id, options);
        const data = await response.json();
        const restaurant = data.restaurant;
        setRestaurant(restaurant);
    }

    useEffect(() => {
        getRestaurant(id);
    }, []);

    async function destroy(id)
    {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }

        const response = await fetch('http://localhost:8000/api/restaurants/' + id, options);
        const data = await response.json();

        console.log(data);

        if (response.status === 200) {
            alert('Restaurant supprimé');
            return window.location.href = '/restaurants';
        }

    }

    return (
        <div>

            <Menu />

            <div className="MesRestaurants">

                <h1>Détails restaurant</h1>

                <h2>{restaurant.nom}</h2>

                <p>{restaurant.adresse}</p>

                <p>{restaurant.heure_ouverture}</p>

                <p>{restaurant.heure_fermeture}</p>

                <button><Link to={'/edit/restaurant/' + restaurant.id}>Edit</Link></button>

                <button onClick={()=>destroy(id)}>Supprimer</button>

            </div>

            <Footer />

        </div>

    )
}

export default DetailsRestaurant;