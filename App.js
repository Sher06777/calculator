import { useState } from 'react';
import "./style.css";

function App() {
const [result,setResult] = useState(0)
const [firstInput,setFirstInput] = useState(0)
const [secondInput,setSecondInput] = useState(0)
function minus(){
 setResult(+firstInput-secondInput)
}
function add(){
  setResult(+firstInput+(+secondInput))
}
function multiply(){
  setResult(+firstInput*(secondInput))
}
function divide(){
  setResult(+firstInput/(+secondInput))
}
function square(){
  setResult((+firstInput)**(secondInput))
}

  return (
    <div className="App">
      <input type="text" className="input1" onChange={(event)=>setFirstInput(event.target.value)}/>
      <input type="text" className="input2"  onChange={(event)=>setSecondInput(event.target.value)}/>
      <div className='btns'>
      <button onClick={minus}>-</button>
      <button onClick={add}>+</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <button onClick={square}>X²</button>
      </div>
      <h1>{result}</h1>
    </div>
  );
}

export default App;