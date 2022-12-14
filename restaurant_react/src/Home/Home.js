import Menu from '../Components/Menu';
import '../Styles/Home.css';
import bann from '../Images/bann.png';
import transition from '../Images/transition.gif';
import pizza from '../Images/pizza.png';
import tape from '../Images/tape.png';
import avocat from '../Images/avocat.png';
import Footer from '../Components/Footer';

function Home() {
    return (
        <div>
            <Menu />
            <img src={transition} alt="transition" className="transition" />
            <div className="bannierPosition">
                <img id="ban" src={bann} alt='bannière' />
            </div>


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
                <img id="pizza" src={pizza} alt='bannière bowl' />
            </div>

            {/* la partie staff */}
            <div className="contenu-back">

                <div className="contenu">

                    <div className="main-card">
                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="content-img">
                                        <img src={tape} alt="icone staff" />
                                    </div>
                                    <div className="details">
                                        <div className="name-cards">Vladou</div>
                                        <div className="name-jobs">Le Karibou</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="content-img">
                                        <img src={tape} alt="icone staff" />
                                    </div>
                                    <div className="details">
                                        <div className="name-cards">Thomas</div>
                                        <div className="name-jobs">Le blagueur</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="content-img">
                                        <img src={tape} alt="icone staff" />
                                    </div>
                                    <div className="details">
                                        <div className="name-cards">Bastien</div>
                                        <div className="name-jobs">Le malin</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="content-img">
                                        <img src={tape} alt="icone staff" />
                                    </div>
                                    <div className="details">
                                        <div className="name-cards">Damien</div>
                                        <div className="name-jobs">Le lumerien</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="content-img">
                                        <img src={tape} alt="icone staff" />
                                    </div>
                                    <div className="details">
                                        <div className="name-cards">Roger</div>
                                        <div className="name-jobs">Le groGer</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="content-img">
                                        <img src={tape} alt="icone staff" />
                                    </div>
                                    <div className="details">
                                        <div className="name-cards">Ibrahima</div>
                                        <div className="name-jobs">Le gros bras</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="content-img">
                                        <img src={tape} alt="icone staff" />
                                    </div>
                                    <div className="details">
                                        <div className="name-cards">Rousslan</div>
                                        <div className="name-jobs">Le chambrelan</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="content-img">
                                        <img src={tape} alt="icone staff" />
                                    </div>
                                    <div className="details">
                                        <div className="name-cards">Cassandra</div>
                                        <div className="name-jobs">La survivante</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="under-home-title">
                        <span>
                            the <span id="under-title-color">staff</span> <br />can help you
                        </span>

                        <div className="home_text">
                            <p>
                                Lorem ipsum dolor sit amet. Qui rerum voluptatem eum blanditiis ratione qui sunt nulla eum adipisci corporis a rerum voluptas et doloremque nisi qui velit eligendi? Aut voluptatibus consequatur non laboriosam maxime ut ducimus dicta. Est quam asperiores aut ducimus veniam nam numquam necessitatibus ut consequatur quaerat qui fuga optio aut nihil laboriosam.
                            </p>

                        </div>
                    </div>
                </div>

                {/* la troisième partie */}
                <div className='avocat_position'>

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
                    <img id="avocat" src={avocat} alt='bannière avocat' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;