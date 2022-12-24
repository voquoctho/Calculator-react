import { useState } from "react";



function App() {

  const [calc ,setcalc] = useState("");
  const [resul,setresul] = useState("");

  const ops = ['+','-','*','/','.'];

  const updateCal = (value) => {
      if(
          ops.includes(value) && calc === '' || 
          ops.includes(value) &&  ops.includes(calc.slice(-1))
      ){
        return;
      }
      setcalc(calc + value);

      if(!ops.includes (value)){
        setresul(eval(calc + value).toString());
      }
  }

  const CreateDigits = () => {
    const Digits = [];

    for(let i=1; i<10; i++){
        Digits.push(
          <button 
            onClick={() => updateCal(i.toString())}  
            key={i}> {i}
          </button>
        )
    }
    return Digits;
  }

  const ketqua =  () => {
    setcalc(eval(calc).toString());
  }

  const deletecal = () =>{
    if(calc === ''){
      return;
    }
    const value = calc.slice(0,-1);
    setcalc(value);
  } 

  return (
    <div className="App">
        <div className="Calculator">
            <div  className="Result">
              {resul ? <span> ({resul})</span> : ''}
              
              { calc || "0"}
            </div>
            <div className="Operator">
               <button onClick={() => updateCal('+')}>+</button>
               <button onClick={() => updateCal('-')}>-</button>
               <button onClick={() => updateCal('*')}>*</button>
               <button onClick={() => updateCal('/')}>/</button>

               <button onClick={deletecal}>DEL</button>
            </div>
            <div className="Digits">
              {CreateDigits()}
              <button onClick={() => updateCal('0')}>0</button>
              <button onClick={() => updateCal('.')}>.</button>
              <button onClick={ketqua}>=</button>
            </div>
        </div>
    </div>
  );
}

export default App;
