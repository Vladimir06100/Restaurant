import { useState, useEffect } from 'react';

function useCalculTTC() {
  const [prixHT, setPrixHT] = useState('');
  const [TVA, setTVA] = useState('');
  const [TTC, setTTC] = useState('');

  useEffect(() => {
    const calcTTC = prixHT * (1 + TVA / 100);
    setTTC(calcTTC.toFixed(2));
  }, [TVA, prixHT]);

  return { prixHT, setPrixHT, TVA, setTVA, TTC };
}
export { useCalculTTC };