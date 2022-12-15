import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import '../Styles/Restaurant.css';
import { useState } from 'react';

function Restaurant() {

    const [nom, setNom] = useState ("");
    const [adresse, setAdresse] = useState ("");
    const [heure_ouverture, setHeure_ouverture] = useState ("");
    const [heure_fermeture, setHeure_fermeture] = useState ("");
    const [image, setImage] = useState ("");

    function handleSubmit(e) {
        console.log(nom, adresse, heure_ouverture, heure_fermeture, image)
        e.preventDefault();
        addRestaurant();
    }

    async function addRestaurant() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                nom: nom,
                adresse: adresse,
                heure_ouverture: heure_ouverture,
                heure_fermeture: heure_fermeture,
                image: image,
})

//

        }
        const response = await fetch(`http://localhost:8000/api/restaurants`, options);
        const data = await response.json();

        console.log('création de restaurant : ', data);

        }

    return (
        <div>
            <Menu />
            <div className="restaurant_position">

                <div className="home_title">
                    <span>
                        Add your <br /><span id="home_title_color">restaurant</span>
                    </span>

                    <div className="restaurant_text">
                        <p>
                            Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.
                        </p>
                    </div>

                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Your name.." required />

                        <label htmlFor="adresse">Adresse</label>
                        <input type="text" id="adresse" name="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="Your adresse.." required />

                        <label htmlFor="horaires">Horaire d'ouverture</label>
                        <input type="time" id="open" name="open" value={heure_ouverture} onChange={(e) => setHeure_ouverture(e.target.value)} placeholder="Your horaires.." required />

                        <label htmlFor="horaires">Horaire de fermeture</label>
                        <input type="time" id="closen" name="closen" value={heure_fermeture} onChange={(e) => setHeure_fermeture(e.target.value)} placeholder="Your horaires.." required />

                        <label htmlFor="image">Image</label>
                        <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Your image.." required />

                        <input id="submitCo" type="submit" value="envoyer" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Restaurant;