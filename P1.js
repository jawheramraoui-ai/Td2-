import React from 'react';

function Resultat() {
  const moyenne = 14; // Modifier en 8 pour la question

  // Définition des styles conditionnels
  const styleAdmis = {
    backgroundColor: 'lightgreen',
    color: 'green',
    padding: '20px',
    borderRadius: '10px'
  };

  const styleRefuse = {
    backgroundColor: 'lightcoral',
    color: 'red',
    padding: '20px',
    borderRadius: '10px'
  };

  return (
    <div style={moyenne >= 10 ? styleAdmis : styleRefuse}>
      <h2>Moyenne de l'étudiant : {moyenne}</h2>
      <p>{moyenne >= 10 ? 'Admis' : 'Refusé'}</p>
    </div>
  );
}

export default Resultat;