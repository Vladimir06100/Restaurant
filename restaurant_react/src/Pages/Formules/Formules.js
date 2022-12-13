import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import { useState, useEffect } from "react";


function Formules() {
    //creation des formules


    const [formule1, setFormule1] = useState(false);
    const [formule2, setFormule2] = useState(false);
    const [formule3, setFormule3] = useState(false);



    async function createFormule1( categorie_produit_entree, categorie_produit_plat, categorie_produit_dessert) {


        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },





            body: JSON.stringify({
                categorie_produit_entree: categorie_produit_entree,
                categorie_produit_plat: categorie_produit_plat,
                categorie_produit_dessert: categorie_produit_dessert,



            }),




        };

        let response = await fetch('http://localhost:8000/api/formules', options);
        let data = await response.json();
        console.log(data);
        const formule1 = data.formule1;
        setFormule1(formule1);


    }

    useEffect(() => {
        console.log('useEffect', formule1);
        createFormule1();
    }, []);




    return (
        <div>
            <Menu />
            <h1>Formules</h1>

            <div>
                <form method="POST" action="" onSubmit={(event) => {
                    const formule1 = event.target.formule1.value;
                    createFormule1("formule1");
                }}>
                </form>

                <form>

                <input type="text" id="name" name="formule1" />
                <button type="submit">formule1</button>

                

                <input type="text" id="name" name="formule2" />
                <button type="submit">formule2</button>

                <input type="text" id="name" name="formule3" />
                <button type="submit">formule3</button>

                


                <button type="submit">Ajouter</button>
                <button type="submit">Modifier</button>

                </form>


            </div>



            <Footer />
        </div>










    )

}

export default Formules;