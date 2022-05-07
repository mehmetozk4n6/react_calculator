import React from "react";
import DisplayScreen from "./DisplayScreen";
import Result from "./Result";

function Display() {
  return (
    <div className="text-right">
      <DisplayScreen />
      <Result />
    </div>
  );
}

export default Display;
