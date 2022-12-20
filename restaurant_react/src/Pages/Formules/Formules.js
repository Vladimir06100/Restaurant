import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import Formules_props from "../../Props/Formules_props";
import Formule1_props from "../../Props/Formule1_props";

function Formules() {
    //création des formules

    const [formules, setFormules] = useState([]);
    const [formule1, setFormule1] = useState([]);

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
                    </div>

                    <form action="" method="get" class="form-example">
                        <div class="form-example">
                            <label for="name">Choose Formule: </label>
                            <input type="text" name="name" id="name" required></input>

                        </div>

                        <div class="form-example">
                            <input type="submit" value="choisir"></input>

                        </div>

                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )

}


export default Formules;
















































