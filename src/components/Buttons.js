const keys = [
  "AC",
  "/",
  "*",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "=",
  "0",
  ".",
];

function Buttons({
  result,
  setTransactation,
  setResult,
  transactation,
  setIsCalculated,
  isCalculated,
}) {
  const calculate = (key) => {
    if (key === "AC") {
      setTransactation("");
      setResult("");
      setIsCalculated(false);
    } else if (key === "=") {
      if (transactation.length > 23) return;
      setTransactation(transactation + key);
      setResult(Calculator(transactation));
      setIsCalculated(true);
    } else {
      if (transactation.length > 23) return;
      setTransactation(transactation + key);
      if (["+", "-", "*", "/"].includes(key)) {
        if (isCalculated) {
          setTransactation(result + key);
          setIsCalculated(false);
        }
        setResult(key);
      } else {
        if (isCalculated) {
          setTransactation(key);
          setResult(key);
          setIsCalculated(false);
        } else {
          if (["+", "-", "*", "/"].includes(result[result.length - 1])) {
            setResult(key);
          } else {
            setResult(result + key);
          }
        }
      }
    }
  };
  return (
    <div className="buttons">
      {keys.map((key, i) => (
        <div
          key={i}
          className={
            key === "AC"
              ? "btn acButton jumbo "
              : key === "0"
              ? "btn jumbo "
              : key === "="
              ? "btn equalButton"
              : "btn"
          }
          onClick={() => calculate(key)}
        >
          <span>{key}</span>
        </div>
      ))}
    </div>
  );
}

export default Buttons;

function Calculator(str) {
  var arithmeticOperators = ["+", "-", "/", "*"];
  var replacedStr = str.replace(/(.)\(/g, function (match, g1) {
    if (arithmeticOperators.indexOf(g1) !== -1) return match;
    else return match.replace(g1, g1 + "*");
  });
  return window.eval(replacedStr);
}
