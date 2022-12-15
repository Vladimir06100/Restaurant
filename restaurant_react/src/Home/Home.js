import Menu from '../Components/Menu';
import '../Styles/Home.css';
import bann from '../Images/bann.png';
import vector from '../Images/vector.png';
import Footer from '../Components/Footer';
import Carrousel from '../Components/Carrousel';



function Home() {
    return (
        <div>
            <Menu />
            <img id="ban" src={bann} alt='bannière' />
            <div className='home_position'>

                <div className="home_title">
                    <span>
                        let customers <br /><span id="home_title_color">choose</span> <br />your restaurant
                    </span>

                    <div className="home_text">
                        <p>
                            Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet. Est accusantium suscipit est quos voluptatem rem consequatur molestias quo libero quia in omnis optio quo quam fuga. Non galisum excepturi cum modi perferendis est animi libero sit quaerat nisi eos laborum atque sit deserunt accusamus. Et nemo dolorum vel rerum quaerat sed dolor tempore et eligendi sapiente hic fugiat possimus. A temporibus omnis eum facilis rerum est harum magnam et assumenda repellendus ex internos modi et ullam repellendus sit voluptate incidunt.

                            Qui temporibus aliquid in dolorem galisum sit accusamus eaque. Ea consequatur vitae id voluptatem ducimus ad asperiores officia. Et quos magnam et veniam minima eum nemo quibusdam. Et libero earum eum quisquam recusandae et ratione odio.

                            Et neque maxime non dicta quasi non nesciunt sint in fugit rerum sed sunt voluptate aut repellendus optio eos mollitia rerum. Vel ipsum neque aut earum optio et repellat aperiam et temporibus dolorem. Qui distinctio enim aut quia praesentium 33 exercitationem laborum et iusto magnam sed facere illum et maxime dolore.
                        </p>
                    </div>
                </div>
            </div>

            <div className="carrousel_position">
                <span className="textCarrousel">OUR PARTENERS <br />WHAT ABOUT <span id="home_title_color">YOU ?</span></span>
                <Carrousel />
            </div>

            <div className="container">
                <span>
                    Et neque maxime non dicta quasi non nesciunt sint in fugit rerum sed sunt voluptate aut repellendus optio eos mollitia rerum. Vel ipsum neque aut earum optio et repellat aperiam et temporibus dolorem. Qui distinctio enim aut quia praesentium 33 exercitationem laborum et iusto magnam sed facere illum et maxime dolore.
                    Et neque maxime non dicta quasi non nesciunt sint in fugit rerum sed sunt voluptate aut repellendus optio eos mollitia rerum. Vel ipsum neque aut earum optio et repellat aperiam et temporibus dolorem. Qui distinctio enim aut quia praesentium 33 exercitationem laborum et iusto magnam sed facere illum et maxime dolore.
                </span>
                <img id="imgvector" src={vector} alt='bannière' />
            </div>
            <Footer />
        </div>
    )
}

export default Home;