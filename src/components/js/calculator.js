import React, { useState } from 'react';
import '../css/calculator.css'

function Calculator() {
    const [currentValue, setCurrentValue]=useState(0);
    const [laterValue, setLaterValue] =useState("")
    function buttonClear(){
        setCurrentValue(0); 
    }
    
    function addValue(value){
        let p=new Promise((resolve,reject)=>{
            var result=(currentValue.toString().concat(value.toString()));
            if(typeof result=== "string"){
                resolve(result);
            }else{
                reject('no se ha podido ejecutar'+ typeof result);
            }
        })
        
        p.then((valor)=>{
            setCurrentValue(valor);
        })

    }

    return (
        <div className="container">
            <div className="calculator">
                <div className="result">
                <div className="laterResult">{laterValue}</div>
    <div className="currentResult" id="display" value={currentValue}>{currentValue}</div>
                </div>
                <div className="AC" id="clear" onClick={buttonClear}>AC</div>
                <div className="slash" id="divide">/</div>
                <div className="times" id="multiply">x</div>
                <div className="seven" id="seven" onClick={()=>addValue(7)}>7</div>
                <div className="eight" id="eight" onClick={()=>addValue(8)}>8</div>
                <div className="nine" id="nine" onClick={()=>addValue(9)}>9</div>
                <div className="minus" id="subtract">-</div>
                <div className="four" id="four" onClick={()=>addValue(4)}>4</div>
                <div className="five" id="five" onClick={()=>addValue(5)}>5</div>
                <div className="six" id="six" onClick={()=>addValue(6)}>6</div>
                <div className="plus" id="add">+</div>
                <div className="one" id="one" onClick={()=>addValue(1)}>1</div>
                <div className="two" id="two" onClick={()=>addValue(2)}>2</div>
                <div className="three" id="three" onClick={()=>addValue(7)}>3</div>
                <div className="equal" id="equals">=</div>
                <div className="zero" id="zero" onClick={()=>addValue(0)}>0</div>
                <div className="point" id="decimal" onClick={()=>addValue(".")}>.</div>
            </div>
            <div>
            </div>
            <h3>Made by Francisco Paul Sotelo Rocha</h3>
        </div>
    )
}

export default Calculator;