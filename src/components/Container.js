import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function Container() {
  const [transactation, setTransactation] = useState("");
  const [result, setResult] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  return (
    <div className="bg-gray-900 text-white container p-1">
      <Display result={result} transactation={transactation} />
      <Buttons
        result={result}
        setTransactation={setTransactation}
        transactation={transactation}
        setResult={setResult}
        setIsCalculated={setIsCalculated}
        isCalculated={isCalculated}
      />
    </div>
  );
}

export default Container;
