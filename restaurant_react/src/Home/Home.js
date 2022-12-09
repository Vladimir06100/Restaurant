import Menu from '../Components/Menu';
import '../Styles/Home.css';
import ban from '../Images/ban.png';
import Footer from '../Components/Footer';


function Home() {
    return (
        <div>
            <Menu />
            <div className='home_position'>
                <div className='home_image'>
                    <img id="imghome" src={ban} alt='bannière' />
                </div>
                <div class="home_title">
                    <span>
                        let customers <br /><span id="home_title_color">choose</span> <br />your restaurant
                    </span>
                    <div class="home_text">
                        <p>Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;