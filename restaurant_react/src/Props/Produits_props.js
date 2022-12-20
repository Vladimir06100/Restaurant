import { useState } from "react";

function Produit(props) {

    const [produits, setProduits] = useState([]);

    async function destroy(produit) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        };
        let response = await fetch('http://localhost:8000/api/produits/delete' + produit.id , options);
        console.log(response)
        if (response.status !== 200) {
            return alert('Une erreur est survenue');
        }
        const data = await response.json();
        const deletedProduit = data.produit;
       
        setProduits([deletedProduit, ...produits]);
        alert('Produit supprimé');
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
                    <td>{props.type}</td>
                    <td>{props.description}</td>
                    <td>{props.prixHT}</td>
                    <td>{props.TVA}</td>
                    <td>{props.prixTTC}</td>
                    <td>{props.quantite}</td>
                    <td>
                        <button className="btn">Modifier</button>
                        <button onClick={destroy} className="btn">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Produit;
