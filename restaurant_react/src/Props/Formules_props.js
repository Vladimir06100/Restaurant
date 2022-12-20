
function Formules(props) {

    return (
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
                <tr>
                    <td>{props.nom_formule}</td>
                    <td>{props.description_formule}</td>
                    <td>{props.categorie_produit_entree}</td>
                    <td>{props.categorie_produit_plat}</td>
                    <td>{props.categorie_produit_dessert}</td>
                    <td>{props.prix_formule}</td>
                    <td>{props.votre_prix}</td>
                    <td>
                    
                 </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Formules;
