import React from "react";
import MoyenRectangle from "./MoyenRectangle";
import { useSelector } from "react-redux";

import "./GrandRectangle.css";

const GrandRectangle = () => {
  const name = useSelector((state) => state.name);
  return (
    <div className='grand-rectangle'>
      {name}
      <MoyenRectangle />
      <MoyenRectangle />
    </div>
  );
};

export default GrandRectangle;
