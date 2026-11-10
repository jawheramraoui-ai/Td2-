import React from 'react';

function Etudiant() {
  const nom = "Ahmed";
  const prenom = "Ali";
  const age = 20;
  const filiere = "Informatique";

  return (
    <div>
      <h2>Informations de l'étudiant</h2>
      <p><strong>Nom complet :</strong> {prenom} {nom}</p>
      <p><strong>Âge :</strong> {age} ans</p>
      <p><strong>Filière :</strong> {filiere}</p>
    </div>
  );
}

export default Etudiant;