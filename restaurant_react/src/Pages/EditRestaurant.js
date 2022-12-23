import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function EditRestaurant()
{
    const [restaurant, setRestaurant] = useState([]);

    const [nom, setNom] = useState([]);
    const [adresse, setAdresse] = useState([]);
    const [heureOuverture, setHeureOuverture] = useState([]);
    const [heureFermeture, setHeureFermeture] = useState([]);
    const [image, setImage] = useState([]);

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

    async function edit(id)
    {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getiItem('token')
            },

            body: JSON.stringify({
                nom: nom,
                adresse: adresse,
                heure_ouverture: heureOuverture,
                heure_fermeture: heureFermeture,
                image: image
            })
        };

        const response = await fetch('http://127.0.0.1:8000/api/restaurants/' + id, options);
        const data = await response.json();

        console.log(data);

        if (response.status !== 200) {
            alert('PRObleme');
            //return window.location.href('/details/restaurant');
        } console.log('successssss')

    }



   
    
    return (
        <div>

            <Menu />

            <div className="restaurant_position">
                <div className="restaurantPositionBis">
                    <div className="home_title">
                        <span>
                            Edit your <br /><span id="home_title_color">restaurant</span>
                        </span>
                        <div className="restaurant_text">
                            <p>
                                Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.
                            </p>
                        </div>
                    </div>
                    <div className="restoDiv">
                        <form id="formRestaurant" onSubmit={()=>edit(id)}>
                            <div className="textbox restaurant">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={restaurant.nom} onChange={(e) => setNom(e.target.value)} placeholder="nom.." required />
                            </div>
                            <div className="textbox restaurant">
                                <label htmlFor="adresse">Adresse</label>
                                <input type="text" id="adresse" name="adresse" value={restaurant.adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="prénom.." required />
                            </div>
                            <div className="textbox restaurant">
                                <label htmlFor="horaires">Horaire d'ouverture</label>
                                <input type="time" id="open" name="open" value={restaurant.heure_ouverture} onChange={(e) => setHeureOuverture(e.target.value)} placeholder="horaires.." required />
                            </div>
                            <div className="textbox restaurant">
                                <label htmlFor="horaires">Horaire de fermeture</label>
                                <input type="time" id="closen" name="closen" value={restaurant.heure_fermeture} onChange={(e) => setHeureFermeture(e.target.value)} placeholder="horaires.." required />
                            </div>
                            <div className="textbox restaurant">
                                <label htmlFor="image">Image</label>
                                <input type="text" id="image" name="image" value={restaurant.image} onChange={(e) => setImage(e.target.value)} placeholder="image.." required />
                            </div>
                            <input id="submitRestaurant" type="submit" name="en" />
                        </form>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )

}

export default EditRestaurant;