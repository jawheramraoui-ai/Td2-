import React from 'react';
import './Resultat.css';

function Resultat() {
  const moyenne = 14;

  return (
    <div className={moyenne >= 10 ? 'admis' : 'refuse'}>
      <h2>Moyenne de l'étudiant : {moyenne}</h2>
      <p>{moyenne >= 10 ? 'Admis' : 'Refusé'}</p>
    </div>
  );
}

export default Resultat;