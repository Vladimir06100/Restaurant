function Produits(nom_produit, prixTTC, categorie, quantite) {
    return (
        <div className="produits">
            <div className="produits__container">
                <div className="produits__wrapper">
                    <ul className="produits__items">
                            nom_produit={nom_produit}
                            categorie={categorie}
                            prix={prixTTC}
                            quantite={quantite}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Produits;