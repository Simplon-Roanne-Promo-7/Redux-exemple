import React from "react";
import PetitCarre from "./PetitCarre";
import "./MoyenRectangle.css";

const MoyenRectangle = ({
  couleurCarre1,
  couleurCarre2,
  changerToutesLesCouleurs,
}) => {
  return (
    <div className='moyen-rectangle'>
      <PetitCarre
        couleur={couleurCarre1}
        changerToutesLesCouleurs={changerToutesLesCouleurs}
      />
      <PetitCarre
        couleur={couleurCarre2}
        changerToutesLesCouleurs={changerToutesLesCouleurs}
      />
    </div>
  );
};

export default MoyenRectangle;
