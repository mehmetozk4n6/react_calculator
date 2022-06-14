import React from "react";

function Display({ result, transactation }) {
  return (
    <div className="text-right">
      <div className="text-orange-500">{transactation ? transactation : 0}</div>
      <div className="text-2xl">{result ? result : 0}</div>
    </div>
  );
}

export default Display;
