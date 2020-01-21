import React, {useState} from 'react';

function Todo(){
    const [buttonText,setButtonText]=useState([]); 
    const [valorEntrada,setValorENtrada]=useState("");
    const agregar=(valor)=> {
      setButtonText([...buttonText,valorEntrada])
    };
    const handle=(event)=>{
      setValorENtrada(event.target.value);
    }
    const eliminar=()=>{
      buttonText.pop();
    }
      return(
        <div className="App">
            
        <input value={valorEntrada} onChange={handle}>
  
        </input>
        <button
          onClick={agregar}
        >
          Presioname plox
        </button>
        <div>
          {
            buttonText.map((number, key)=>
            <li key={key}>{number}</li>
            )
          }
        </div>
        <button
          onClick={eliminar}
        >
          Presioname para imprimir
        </button>
      </div>
      )
}

export default Todo;