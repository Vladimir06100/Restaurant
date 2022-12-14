import { useEffect, useState } from "react";

function Produit(props) {

    const [categories, setCategories] = useState([]);
    console.log(categories, 'test');

    async function getCategories() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let response = await fetch('http://localhost:8000/api/categories', options);
        const data = await response.json();
        console.log(data);
        const categories = data.categories;
        setCategories(categories);
        console.log(categories);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Catégorie</th>
                    <th>Description</th>
                    <th>PrixHT</th>
                    <th>TVA</th>
                    <th>PrixTTC</th>
                    <th>Quantité</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.nom_produit}</td>
                    {/* <td>{props.categories.type}</td> */}
                    {/* <td>{categorie_id}</td> */}
                    <td>{props.description}</td>
                    <td>{props.prixHT}</td>
                    <td>{props.TVA}</td>
                    <td>{props.prixTTC}</td>
                    <td>{props.quantite}</td>
                    <td>
                    <button className="btn">Modifier</button>
                    <button className="btn">Supprimer</button>
                 </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Produit;
// {/* onClick={() => editProduit(produit.id)} onClick={() => deleteProduit(produit.id)} */}