import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";


function Formules(nom_formule, description_formule, entree, plat, dessert, prix_formule, votre_prix) {
    //création des formules

    const [formules, setFormules] = useState([]);








    async function createFormules() {



        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            Body: JSON.stringify({
                nom_formule: nom_formule,
                description_formule: description_formule,
                entree: entree,
                plat: plat,
                dessert: dessert,
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

    }

    useEffect(() => {
        console.log('useEfect');
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
                        <ul>
                            {formules.map((formule, index) => (
                                
                                <Formules
                                key={index}
                                nom_formule={formule.nom_formule}
                                description_formule={formule.description_formule}
                                entree={formule.entree}
                                plat={formule.plat}
                                dessert={formule.dessert}
                                prix_formule={formule.prix_formule}
                                votre_prix={formule.votre_prix}
                                />
                                


                                    
                                    ))}
                        </ul>
                    </div>
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


            <Footer />
        </div>
    )

}

export default Formules;
















































