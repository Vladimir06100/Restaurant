/* eslint-disable jsx-a11y/anchor-is-valid */
import Menu from '../Components/Menu';
import '../Styles/Home.css';
import bann from '../Images/bann.png';
import transition from '../Images/transition.gif';
import pizza from '../Images/pizza.png';
//import tape from '../Images/tape.png';
import Footer from '../Components/Footer';

function Home() {
    return (
        <div>
            <Menu />
            <img src={transition} alt="transition" className="transition" />

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
                <img id="bowl" src={pizza} alt='bannière bowl' />
            </div>

            <div className="contenu">
                <input type="radio" name="dot" id="one" />
                <input type="radio" name="dot" id="two" />
                <div className="main-card">
                    <div className="cards">
                        <div className="card">
                            <div className="content">
                                {/* <div className="content-img">
                                    <img src={tape} alt="icone staff" />
                                </div> */}
                                <div className="details">
                                    <div className="name-cards">Vladi Test</div>
                                    <div className="name-jobs">Web Designer</div>
                                </div>
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <div className="content">
                                <div className="content-img">
                                    {/* <img src={tape} alt */}
                                </div>
                                <div className="details">
                                    <div className="name-cards">Vladou Test</div>
                                    <div className="name-jobs">Web Designer</div>
                                </div>
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <span>
                    Et neque maxime non dicta quasi non nesciunt sint in fugit rerum sed sunt voluptate aut repellendus optio eos mollitia rerum. Vel ipsum neque aut earum optio et repellat aperiam et temporibus dolorem. Qui distinctio enim aut quia praesentium 33 exercitationem laborum et iusto magnam sed facere illum et maxime dolore.
                    Et neque maxime non dicta quasi non nesciunt sint in fugit rerum sed sunt voluptate aut repellendus optio eos mollitia rerum. Vel ipsum neque aut earum optio et repellat aperiam et temporibus dolorem. Qui distinctio enim aut quia praesentium 33 exercitationem laborum et iusto magnam sed facere illum et maxime dolore.
                </span> */}
            </div>

            <div className="button">
                <label htmlFor="one" className=" active one"></label>
                <label htmlFor="two" className="two"></label>
            </div>
            <Footer />
        </div>
    )
}

export default Home;









// < !DOCTYPE html >
// < !--Created By CodingLab - www.codinglabweb.com-- >
//     <html lang="en" dir="ltr">
//         <head>
//             <meta charset="UTF-8">
//                 <!---<title> Responsive Our Team Section | CodingLab </title>---->
//                 <link rel="stylesheet" href="style.css">
//                     <!-- Fontawesome CDN Link -->
//                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     </head>
//                     <body>
//                         <div class="container">
//                             <input type="radio" name="dot" id="one">
//                                 <input type="radio" name="dot" id="two">
//                                     <div class="main-card">
//                                         <div class="cards">
//                                             <div class="card">
//                                                 <div class="content">
//                                                     <div class="img">
//                                                         <!--- <img src="images/img1.jpg" alt="">-->
//                                                     </div>
//                                                     <div class="details">
//                                                         <div class="name">Andrew Neil</div>
//                                                         <div class="job">Web Designer</div>
//                                                     </div>
//                                                     <div class="media-icons">
//                                                         <a href="#"><i class="fab fa-facebook-f"></i></a>
//                                                         <a href="#"><i class="fab fa-twitter"></i></a>
//                                                         <a href="#"><i class="fab fa-instagram"></i></a>
//                                                         <a href="#"><i class="fab fa-youtube"></i></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="card">
//                                                 <div class="content">
//                                                     <div class="img">
//                                                         <!--- <img src="images/img2.jpg" alt="">--->
//                                                     </div>
//                                                     <div class="details">
//                                                         <div class="name">Jasmine Carter</div>
//                                                         <div class="job">UI Designer</div>
//                                                     </div>
//                                                     <div class="media-icons">
//                                                         <a href="#"><i class="fab fa-facebook-f"></i></a>
//                                                         <a href="#"><i class="fab fa-twitter"></i></a>
//                                                         <a href="#"><i class="fab fa-instagram"></i></a>
//                                                         <a href="#"><i class="fab fa-youtube"></i></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="card">
//                                                 <div class="content">
//                                                     <div class="img">
//                                                         <!-- <img src="images/img3.jpg" alt="">---->
//                                                     </div>
//                                                     <div class="details">
//                                                         <div class="name">Justin Chung</div>
//                                                         <div class="job">Web Devloper</div>
//                                                     </div>
//                                                     <div class="media-icons">
//                                                         <a href="#"><i class="fab fa-facebook-f"></i></a>
//                                                         <a href="#"><i class="fab fa-twitter"></i></a>
//                                                         <a href="#"><i class="fab fa-instagram"></i></a>
//                                                         <a href="#"><i class="fab fa-youtube"></i></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="cards">
//                                             <div class="card">
//                                                 <div class="content">
//                                                     <div class="img">
//                                                         <!---<img src="images/img4.jpg" alt="">--->
//                                                     </div>
//                                                     <div class="details">
//                                                         <div class="name">Appolo Reef</div>
//                                                         <div class="job">Web Designer</div>
//                                                     </div>
//                                                     <div class="media-icons">
//                                                         <a href="#"><i class="fab fa-facebook-f"></i></a>
//                                                         <a href="#"><i class="fab fa-twitter"></i></a>
//                                                         <a href="#"><i class="fab fa-instagram"></i></a>
//                                                         <a href="#"><i class="fab fa-youtube"></i></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="card">
//                                                 <div class="content">
//                                                     <div class="img">
//                                                         <!--<img src="images/img5.jpg" alt="">---->
//                                                     </div>
//                                                     <div class="details">
//                                                         <div class="name">Adrina Calvo</div>
//                                                         <div class="job">UI Designer</div>
//                                                     </div>
//                                                     <div class="media-icons">
//                                                         <a href="#"><i class="fab fa-facebook-f"></i></a>
//                                                         <a href="#"><i class="fab fa-twitter"></i></a>
//                                                         <a href="#"><i class="fab fa-instagram"></i></a>
//                                                         <a href="#"><i class="fab fa-youtube"></i></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="card">
//                                                 <div class="content">
//                                                     <div class="img">
//                                                         <!--<img src="images/img6.jpeg" alt="">--->
//                                                     </div>
//                                                     <div class="details">
//                                                         <div class="name">Nicole Lewis</div>
//                                                         <div class="job">Web Devloper</div>
//                                                     </div>
//                                                     <div class="media-icons">
//                                                         <a href="#"><i class="fab fa-facebook-f"></i></a>
//                                                         <a href="#"><i class="fab fa-twitter"></i></a>
//                                                         <a href="#"><i class="fab fa-instagram"></i></a>
//                                                         <a href="#"><i class="fab fa-youtube"></i></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="button">
//                                         <label for="one" class=" active one"></label>
//                                         <label for="two" class="two"></label>
//                                     </div>
//                                 </div>
//                             </body>
//                         </html>
