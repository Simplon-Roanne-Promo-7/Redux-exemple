import React from "react";
import PetitCarre from "./PetitCarre";
import "./MoyenRectangle.css";

const MoyenRectangle = () => {
  return (
    <div className='moyen-rectangle'>
      <PetitCarre />
      <PetitCarre />
    </div>
  );
};

export default MoyenRectangle;
