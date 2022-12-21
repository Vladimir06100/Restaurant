function Produit(props) {
    // coucou
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
                        <button onClick={props.update} className="btn">Modifier</button>
                        <button onClick={() => props.destroy(props.id)} className="btn">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Produit;
