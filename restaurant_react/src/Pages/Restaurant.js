import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import '../Styles/Restaurant.css';
import { useState } from 'react';

function Restaurant() {

    const [name, setName] = useState ("");
    const [adress, setAdress] = useState ("");
    const [phone, setPhone] = useState ("");
    const [horaires, setHoraires] = useState ("");
    const [description, setDescription] = useState ("");
    const [image, setImage] = useState ("");

    function handleSubmit(e) {
        const addfield = (name, adress, phone, horaires, description, image)
        e.preventDefault();
    }

    async function addRestaurant() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                name: name,
                adress: adress,
                phone: phone,
                horaires: horaires,
                description: description,
                image: image,
})
        }
        
        const response = await fetch(`http://localhost:8000/api/restaurants`, options);
        const data = await response.json();

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
                        <input type="text" id="name" name="name" placeholder="Your name.." required />

                        <div className="textbox">
                            <label htmlFor="adresse"></label>
                            <input type="text" id="adresse" name="adresse" placeholder="Your adresse.." required />
                            <span class="material-symbols-outlined">
                                home
                            </span>
                        </div>

                        <div className="textbox">
                            <label htmlFor="phone"></label>
                            <input type="text" id="phone" name="phone" placeholder="Your phone.." required />
                            <span class="material-symbols-outlined">
                                call
                            </span>
                        </div>

                        <div className="textbox">
                            <label htmlFor="horaires"></label>
                            <input type="text" id="horaires" name="horaires" placeholder="Your horaires.." required />
                            <span class="material-symbols-outlined">
                                schedule
                            </span>
                        </div>

                        <input id="submitCo" type="submit" name="en" onclick="alert('Vôtre restaurant à été crée')" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
}

export default Restaurant;