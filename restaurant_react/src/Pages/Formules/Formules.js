import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";
import Formules_props from "../../Props/Formules_props";


function Formules() {
    //création des formules

    const [formules, setFormules] = useState([]);

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
                    </div>
                </div>

                <input type="text" placeholder="" v-model="choix formule" />
                <button className="btn">Choisir formule</button>

                <input type="text" placeholder="" v-model="formule1" />
                <button type="submit">formule1</button>
                <input type="text" id="name" name="formule1" />


                
                <button type="submit">formule2</button>
                <input type="text" id="name" name="formule2" />



                <button type="submit">formule3</button>
                <input type="text" id="name" name="formule3" />


                <button type="submit">Ajouter</button>
                <button type="submit">Modifier</button>
</div>
            </div>
                <Footer />
        </div>
    )

}
                                

export default Formules;
















































