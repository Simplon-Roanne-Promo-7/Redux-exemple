import React from "react";
import "./PetitCarre.css";

const PetitCarre = ({ couleur, changerCouleur }) => {
  const handleColorChange = (event) => {
    changerCouleur(event.target.value);
  };

  return (
    <div className='petit-carre' style={{ backgroundColor: couleur }}>
      <input type='color' value={couleur} onChange={handleColorChange} />
    </div>
  );
};

export default PetitCarre;
