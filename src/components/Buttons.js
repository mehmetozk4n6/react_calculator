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
      if (
        transactation.length > 23 ||
        transactation.match(/\d+[+\-*/]\d+/g) === null ||
        transactation.match(/\d+[+\-*/]\d+/g).length < 1
      )
        return;
      setResult(Calculator(transactation));
      setTransactation(transactation + key);
      setIsCalculated(true);
    } else {
      if (transactation.length > 23) return;
      if (["+", "-", "*", "/"].includes(key)) {
        if (transactation.length < 1) return;
        // if (!transactation[transactation.length - 1] === "=") {
        //   if (
        //     transactation[transactation.length - 1]?.match(/\d+/) === null ||
        //     transactation[transactation.length - 1]?.match(/\d+/).length < 1
        //   )
        //     return;
        // }
        if (isCalculated) {
          setTransactation(result + key);
          setResult(key);
          setIsCalculated(false);
        } else {
          setTransactation(transactation + key);
          setResult(key);
        }
      } else {
        if (isCalculated) {
          setTransactation(key);
          setResult(key);
          setIsCalculated(false);
        } else {
          setTransactation(transactation + key);
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

// function Calculator(str) {
//   var arithmeticOperators = ["+", "-", "/", "*"];
//   var replacedStr = str.replace(/(.)\(/g, function (match, g1) {
//     if (arithmeticOperators.indexOf(g1) !== -1) return match;
//     else return match.replace(g1, g1 + "*");
//   });
//   return eval(replacedStr);
// }

const Calculator = (operation) => {
  const ops = [];

  let num = 0;
  for (let i = 0; i < operation.length; i++) {
    if (["+", "-", "*", "/"].includes(operation[i])) {
      ops.push(operation.slice(num, i));
      ops.push(operation[i]);
      num = i + 1;
    } else if (i === operation.length - 1) {
      ops.push(operation.slice(num, i + 1));
    }
  }

  let opsSimple = [];

  for (let x = 0; x < ops.length; x++) {
    if (ops[x] === "*") {
      const val = opsSimple.pop();
      opsSimple.push(val * ops[x + 1]);
      x++;
    } else if (ops[x] === "/") {
      // do not allow division by zero!
      if (ops[x + 1] === "0") return "Error! Division by zero!";
      const val = opsSimple.pop();
      opsSimple.push(val / ops[x + 1]);
      x++;
    } else {
      opsSimple.push(ops[x]);
    }
  }

  let result = parseInt(opsSimple[0]);
  for (let x = 1; x < opsSimple.length; x = x + 2) {
    if (opsSimple[x] === "+") {
      result += Number(opsSimple[x + 1]);
    } else {
      result -= opsSimple[x + 1];
    }
  }
  return result;
};
