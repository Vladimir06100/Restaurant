
function Formules(props) {

    return (
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
    );
}

export default Formules;

