import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import '../Styles/Restaurant.css';

function Restaurant() {
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
                <div className="formRestaurant">
                    <form method="POST" action="">

                        <div className="textbox">
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Your name.." required />
                            <span class="material-symbols-outlined">
                                badge
                            </span>
                        </div>

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

export default Restaurant;