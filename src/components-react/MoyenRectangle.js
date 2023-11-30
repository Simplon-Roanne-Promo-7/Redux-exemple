import React, { useState } from "react";
import PetitCarre from "./PetitCarre";
import "./MoyenRectangle.css";

const MoyenRectangle = () => {
  const [couleurCarre1, setCouleurCarre1] = useState("#fff");
  const [couleurCarre2, setCouleurCarre2] = useState("#666");

  return (
    <div className='moyen-rectangle'>
      <PetitCarre
        key='carre1'
        couleur={couleurCarre1}
        changerCouleur={setCouleurCarre2}
      />
      <PetitCarre
        key='carre2'
        couleur={couleurCarre2}
        changerCouleur={setCouleurCarre1}
      />
    </div>
  );
};

export default MoyenRectangle;
