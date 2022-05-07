import React from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function Container() {
  return (
    <div className="bg-gray-900 text-white container">
      <Display />
      <Buttons />
    </div>
  );
}

export default Container;
