import React from 'react';

function Formation() {
  const disponible = true;
  const places = 5;

  return (
    <div>
      {/* 1. Affichage du nom de la formation */}
      <h2>Formation : React JS</h2>

      {/* 2. Si disponible, afficher "Inscriptions ouvertes" */}
      {disponible && <p>Inscriptions ouvertes</p>}

      {/* 3. Si places > 0, afficher "Il reste des places" */}
      {places > 0 && <p>Il reste des places ({places})</p>}

      {/* 4. Si non disponible (disponible === false), rien de concernant l'inscription ne s'affiche */}
    </div>
  );
}

export default Formation;