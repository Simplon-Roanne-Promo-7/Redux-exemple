import React from "react";
import "./PetitCarre.css";

const PetitCarre = ({ couleur, changerToutesLesCouleurs }) => {
  const handleButtonClick = () => {
    changerToutesLesCouleurs(couleur);
  };

  return (
    <div className='petit-carre' style={{ backgroundColor: couleur }}>
      <input
        type='color'
        value={couleur}
        onChange={(e) => changerToutesLesCouleurs(e.target.value)}
      />
      <button onClick={handleButtonClick}>Changer toutes les couleurs</button>
    </div>
  );
};

export default PetitCarre;
