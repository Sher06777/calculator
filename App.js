import { useState } from 'react';
import "./style.css";

function App() {
  const [result, setResult] = useState(0);
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);

  function minus() {
    setResult(+firstInput - secondInput);
  }

  function add() {
    setResult(+firstInput + (+secondInput));
  }

  function multiply() {
    setResult(+firstInput * secondInput);
  }

  function divide() {
    if (+secondInput == 0) {
      setResult("Нельзя делить на ноль");
    } else {
      setResult(+firstInput / secondInput);
    }
  }

  function square() {
    setResult(Math.pow(+firstInput, 2));
  }

  function cube() {
    setResult(Math.pow(+firstInput, 3));
  }

  function root() {
    setResult(Math.sqrt(+firstInput));
  }

  return (
    <div className="App">
      <input type="text" className="input1" onChange={(event) => setFirstInput(event.target.value)} />
      <input type="text" className="input2" onChange={(event) => setSecondInput(event.target.value)} />
      <div className='btns'>
        <button onClick={minus}>-</button>
        <button onClick={add}>+</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={square}>X²</button>
        <button onClick={cube}>X³</button>
        <button onClick={root}>root</button>
      </div>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
