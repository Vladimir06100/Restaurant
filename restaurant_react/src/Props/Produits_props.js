import { useEffect, useState } from "react";
import "../Styles/Produits_props.css";

function Produit(props) {
    const [isClicked, setIsClicked] = useState(false);

    function updateProduit() { }
    const update = (e) => {
        setIsClicked(!isClicked);
        // props.update(props.id, e.target.value);
    };
    useEffect(() => {
        console.log("isClicked", isClicked);
    }, [isClicked]);

    return (
        <table>
            <thead>
                <tr className="header-row">
                    <th>Nom</th>
                    <th>Catégorie</th>
                    <th>Description</th>
                    <th>PrixHT</th>
                    <th>TVA</th>
                    <th>PrixTTC</th>
                    <th>Quantité</th>
                    <th class="actions-header">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {isClicked ? (
                        <td>
                            <input type="text" value={props.nom_produit} onChange={update} />
                        </td>
                    ) : (
                        <td>{props.nom_produit}</td>
                    )}
                    {/* {isClicked ? <select value={props.categorie_id} onChange={update}> {props.produit.map((categorie) => <option value={categorie.id}>{categorie.nom_categorie}</option>)} </select> : <td>{props.categorie_id}</td>} */}
                    {isClicked ? (
                        <td>
                            <input type="text" value={props.description} onChange={update} />
                        </td>
                    ) : (
                        <td>{props.description}</td>
                    )}
                    {isClicked ? (
                        <td>
                            <input type="text" value={props.prixHT} onChange={update} />
                        </td>
                    ) : (
                        <td>{props.prixHT}</td>
                    )}
                    {isClicked ? (
                        <td>
                            <input type="text" value={props.TVA} onChange={update} />
                        </td>
                    ) : (
                        <td>{props.TVA}</td>
                    )}
                    {isClicked ? (
                        <td>
                            <input type="text" value={props.prixTTC} onChange={update} />
                        </td>
                    ) : (
                        <td>{props.prixTTC}</td>
                    )}
                    {isClicked ? (
                        <td>
                            <input type="text" value={props.quantite} onChange={update} />
                        </td>
                    ) : (
                        <td>{props.quantite}</td>
                    )}

                    <td>
                        {!isClicked ? (
                            <button onClick={() => setIsClicked(!isClicked)} className="btn-edit">
                                Modifier
                            </button>
                        ) : null}
                        {isClicked ? (
                            <button
                                onClick={() =>
                                    props.update(
                                        props.id,
                                        props.nom_produit,
                                        props.categorie_id,
                                        props.description,
                                        props.prixHT,
                                        props.TVA,
                                        props.prixTTC,
                                        props.quantite
                                    )
                                }
                                className="btn-validate"
                            >
                                Valider
                            </button>
                        ) : null}
                        <button onClick={() => props.destroy(props.id)} className="btn-delete">
                            Supprimer
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Produit;
