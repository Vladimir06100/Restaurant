// ici calculer le prix TTC
// create new function to calculate the price TTC

import React, { useState, useEffect } from 'react';
import '../Styles/Calcul.css';
function Calcul(  ) {

  

  
    // calculer le prix TTC
  const [prixHT, setPrixHT] = useState(0);
  const [TVA, setTva] = useState(0);
  const [prixTTC, setPrixTTC] = useState(0);

  const calculer = () => {
    setPrixTTC(prixHT * (1 + TVA / 100));
  }

  useEffect(() => {
    calculer();
  }
    , [prixHT, TVA]);
  
  
  return (
    <div className="calcul">
      <div className="calcul__container">
        <div className="calcul__wrapper">
          <div className="calcul__items">
            <div className="calcul__item">
              <div className="calcul__item__title">
                <h1>Calculer le prix TTC</h1>
              </div>
              <div className="calcul__item__content">
                <div className="calcul__item__content__row">
                  <div className="calcul__item__content__row__label">
                    <label htmlFor="prixHT">Prix HT</label>
                  </div>
                  <div className="calcul__item__content__row__input">
                    <input type="text" id="prixHT" name="prixHT" placeholder="Prix du produit" required onChange={(e) => setPrixHT(e.target.value)} />
                  </div>
                </div>
                <div className="calcul__item__content__row">
                  <div className="calcul__item__content__row__label">
                    <label htmlFor="tva">TVA</label>
                  </div>
                  <div className="calcul__item__content__row__input">
                    <select id="tva" name="tva" required onChange={(e) => setTva(e.target.value)}>
                      <option selected>Choisir une TVA</option>
                      <option value=''>0%</option>
                      <option value=''>5.5%</option>
                      <option value=''>10%</option>
                      <option value=''>20%</option>
                    </select>
                  </div>
                </div>
                <div className="calcul__item__content__row">
                  <div className="calcul__item__content__row__label">
                    <label htmlFor="prixTTC">Prix TTC</label>
                  </div>
                  <div className="calcul__item__content__row__input">
                    <input type="text" id="prixTTC" name="prixTTC" placeholder="Prix TTC" required value={prixTTC} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

              

}
export default Calcul;
