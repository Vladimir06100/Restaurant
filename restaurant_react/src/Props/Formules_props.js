
function Formules(props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Nom_formule</th>
                    <th>description_formule</th>
                    <th>entree</th>
                    <th>plat</th>
                    <th>dessert</th>
                    <th>prix_formule</th>
                    <th>votre_prix</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.Nom_formule}</td>
                    <td>{props.type}</td>
                    {/* <td>{props.categories.type}</td> */}
                    {/* <td>{categorie_id}</td> */}
                    <td>{props.entree}</td>
                    <td>{props.plat}</td>
                    <td>{props.dessert}</td>
                    <td>{props.prix_formule}</td>
                    <td>{props.votre_prix}</td>
                    <td>
                    <button className="btn">Modifier</button>
                    <button className="btn">Supprimer</button>
                 </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Formules;
