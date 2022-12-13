function Produit({ nom_produit, categorie_id, description, prixHT, TVA, prixTTC, quantite }) {

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
                    <td>{nom_produit}</td>
                    <td>{categorie_id}</td>
                    <td>{description}</td>
                    <td>{prixHT}</td>
                    <td>{TVA}</td>
                    <td>{prixTTC}</td>
                    <td>{quantite}</td>
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