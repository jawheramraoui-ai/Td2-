import React from 'react';

function Voyage() {
  const budget = 1500;

  // Détermination du message selon les conditions
  const meMessage = () => {
    if (budget >= 2000) {
      return "Voyage premium";
    } else if (budget >= 1000) {
      return "Voyage économique";
    } else {
      return "Budget insuffisant";
    }
  };

  return (
    <div>
      <h2>Offre de voyage</h2>
      <p>Budget disponible : {budget} DT</p>
      <p><strong>Type de voyage :</strong> {meMessage()}</p>
    </div>
  );
}

export default Voyage;