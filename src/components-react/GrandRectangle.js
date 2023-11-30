import React from "react";
import MoyenRectangle from "./MoyenRectangle";
import "./GrandRectangle.css";

const GrandRectangle = () => {
  return (
    <div className='grand-rectangle'>
      <MoyenRectangle />
      <MoyenRectangle />
    </div>
  );
};

export default GrandRectangle;
