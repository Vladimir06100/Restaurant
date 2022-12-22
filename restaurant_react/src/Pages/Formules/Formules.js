import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import Formules_props from "../../Props/Formules_props";
import Formule1_props from "../../Props/Formule1_props";
import Formule2_props from "../../Props/Formule2_props";
import Formule3_props from "../../Props/Formule3_props";

function Formules() {
    //création des formules

    const [formules, setFormules] = useState([]);
    const [formule1, setFormule1] = useState([]);
    const [formule2, setFormule2] = useState([]);
    const [formule3, setFormule3] = useState([]);


    async function createFormules(nom_formule, description_formule, categorie_produit_entree, categorie_produit_plat, categorie_produit_dessert, prix_formule, votre_prix) {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            Body: JSON.stringify({
                nom_formule: nom_formule,
                description_formule: description_formule,
                categorie_produit_entree: categorie_produit_entree,
                categorie_produit_plat: categorie_produit_plat,
                categorie_produit_dessert: categorie_produit_dessert,
                prix_formule: prix_formule,
                votre_prix: votre_prix,

            }),
        }



        let response = await fetch('http://localhost:8000/api/formules', options);
        let data = await response.json();
        console.log(data);

        setFormules(data);

    }


    useEffect(() => {
        console.log('useEffect', Formules);
        createFormules();
    }, []);


    async function getFormules() {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let response = await fetch('http://localhost:8000/api/formules', options);
        let data = await response.json();
        console.log(data);
        const formules = data.formules;
        setFormules(data.formules);
        setFormules(formules);
        setFormule1(formule1);

    }

    useEffect(() => {
        getFormules();
    }, []);




    return (
        <div>
            <Menu />

            <h1>Les Formules</h1>
            <div className="formules">
                <div className="formules__container">
                    <div className="formules__wrapper">
                        <ul className="formules__items"></ul>
                        <div id="formFormules" method="POST" action="" onSubmit={(event) => {
                            const formules = event.target.formules.value;
                            createFormules(formules);
                        }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>nom_formule</th>
                                        <th>description_formule</th>
                                        <th>categorie_produit_entree</th>
                                        <th>categorie_produit_plat</th>
                                        <th>categorie_produit_dessert</th>
                                        <th>prix_formule</th>
                                        <th>votre_prix</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formules.map((formule, index) => (
                                        <Formules_props
                                            key={index}
                                            nom_formule={formule.nom_formule}
                                            description_formule={formule.description_formule}
                                            categorie_produit_entree={formule.categorie_produit_entree}
                                            categorie_produit_plat={formule.categorie_produit_plat}
                                            categorie_produit_dessert={formule.categorie_produit_dessert}
                                            prix_formule={formule.prix_formule}
                                            votre_prix={formule.votre_prix}
                                        />
                                    ))}
                                </tbody>
                            </table>

                        </div>
                        <tbody>
                            {formule1.map((formule1, index) => (
                                <Formule1_props
                                    key={index}
                                    categorie_produit_entree={formule1.categorie_produit_entree}
                                    categorie_produit_plat={formule1.categorie_produit_plat}
                                    categorie_produit_dessert={formule1.categorie_produit_dessert}
                                />
                            ))}
                        </tbody>

                        <tbody>
                            {formule2.map((formule2, index) => (
                                <Formule2_props
                                    key={index}
                                    categorie_produit_plat={formule2.categorie_produit_plat}
                                    categorie_produit_dessert={formule2.categorie_produit_dessert}
                                />
                            ))}
                        </tbody>

                        <tbody>
                            {formule3.map((formule3, index) => (
                                <Formule3_props
                                    key={index}
                                    categorie_produit_entree={formule3.categorie_produit_entree}
                                    categorie_produit_plat={formule3.categorie_produit_plat}
                                />
                            ))}
                        </tbody>
                    </div>
                    

                    <form action="http://localhost:8000/api/categories" method="POST">
                        <label for="choix">Choisir</label><br></br>
                        <input id="entree" name="name" type="text" placeholder="entree"/><br/>
                        <input id="plat" name="name" type="text" placeholder="plat"/><br/>
                        <input id="dessert" name="name" type="text" placeholder="dessert"/><br/>
                        <input type="button" value="valider"></input>

                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )

}


export default Formules;
















































