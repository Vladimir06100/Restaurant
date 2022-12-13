function Produit(nom_produit, categorie_id, description, prixHT, prixTTC, TVA, quantite) {
    // categorie_id,
    return (
        <div className="produits">
            <div className="produits__container">
                <div className="produits__wrapper">
                    <ul className="produits__items">
                        nom_produit={nom_produit}
                        categorie_id={categorie_id}
                        description={description}
                        prixHT={prixHT}
                        prixTTC={prixTTC}
                        TVA={TVA}
                        quantite={quantite}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Produit;