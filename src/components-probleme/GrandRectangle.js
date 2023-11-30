import React, { useState } from "react";
import MoyenRectangle from "./MoyenRectangle";
import "./GrandRectangle.css";

const GrandRectangle = () => {
  const [couleurs, setCouleurs] = useState(["#666", "#fff", "#999", "#666"]);

  const changerToutesLesCouleurs = (nouvelleCouleur) => {
    setCouleurs(couleurs.map(() => nouvelleCouleur));
  };

  return (
    <div className='grand-rectangle'>
      <MoyenRectangle
        couleurCarre1={couleurs[0]}
        couleurCarre2={couleurs[1]}
        changerToutesLesCouleurs={changerToutesLesCouleurs}
      />
      <MoyenRectangle
        couleurCarre1={couleurs[2]}
        couleurCarre2={couleurs[3]}
        changerToutesLesCouleurs={changerToutesLesCouleurs}
      />
    </div>
  );
};

export default GrandRectangle;
