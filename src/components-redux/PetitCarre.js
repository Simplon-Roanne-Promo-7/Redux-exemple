import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PetitCarre.css";

const PetitCarre = () => {
  const couleur = useSelector((state) => state.color);
  const dispatch = useDispatch();

  const handleColorChange = (event) => {
    dispatch({
      type: "CHANGER_LES_COULEURS",
      payload: event.target.value,
    });
  };

  return (
    <div className='petit-carre' style={{ backgroundColor: couleur }}>
      <input type='color' value={couleur} onChange={handleColorChange} />
    </div>
  );
};

export default PetitCarre;
