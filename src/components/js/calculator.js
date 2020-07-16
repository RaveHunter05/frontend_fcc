import React, { useState , useEffect } from 'react';
import '../css/calculator.css'

function Calculator() {
    const [currentValue, setCurrentValue]=useState(0);
    const [laterValue1, setLaterValue1] =useState('');

    function buttonClear(){
        setCurrentValue(0); 
        setLaterValue1('');
    }
    
    function addValue(value){
        if(currentValue==0){
            setCurrentValue(`${value}`)
        }else{
            if(currentValue.toString().match(/[0-9]/) || currentValue==''){
                    let newNumber=`${currentValue}${value}`;
                    setCurrentValue(newNumber);
                    if(value==0){
                        if(currentValue.toString().match(/\./)){
                            setCurrentValue(`${currentValue}0`);
                        }
                    }
            }else{
                setCurrentValue(`${currentValue}${value}`)
            }
        }
       
    }

    function operation(value){
        let doubleOperations = /[\*+\/-][\*+\/-]/
        let tripleOperations = /[\*+\/-][\*+\/-][\*+\/-]/
        let plusMinus = /[\*][-]/
        let nuevoValor = `${currentValue}${value}`

        if(nuevoValor.match(tripleOperations)){
            setCurrentValue(currentValue.slice(0,-2)+value)
        }
        else if(nuevoValor.match(plusMinus)){
                setCurrentValue(nuevoValor)
        }
        else if(nuevoValor.match(doubleOperations)){
            setCurrentValue(currentValue.slice(0,-1)+value)
        }else{
            setCurrentValue(currentValue+value)
        }
        
    }

    function minus(){

    }

    function equal(){   

        let resultado = '';
        let valor = currentValue.match(/[0-9]+|[+*\/-]|\./g)
        if(valor != null){
            valor.map(x=>{
                resultado += x
            })
            setCurrentValue(eval(resultado))
        }
        else{

        }
    }

    function multiply(){

    }

    function division(){

    }

    function decimal(value){
        // if(!currentValue.toString().match(/\./)){
        //     let newNumber=`${currentValue}.`;
        //     setCurrentValue(newNumber)
        // }
        const numberPoints = /\.\d\./
        const doublePoints = /\.\./
        let newValor= `${currentValue}.`
        if(!newValor.match(doublePoints) && !newValor.match(numberPoints)){
            setCurrentValue(newValor)
        }
    }
    return (
        <div className="container">
            <div className="calculator">
                <div className="result">
                    <div className="laterResult">{laterValue1}</div>
                    <div className="currentResult" id="display" value={currentValue}>{currentValue}</div>
                </div>
                <div className="AC" id="clear" onClick={buttonClear}>AC</div>
                <div className="slash" id="divide" onClick={()=>operation('/')}>/</div>
                <div className="times" id="multiply" onClick={()=>operation('*')}>x</div>
                <div className="seven" id="seven" onClick={()=>addValue(7)}>7</div>
                <div className="eight" id="eight" onClick={()=>addValue(8)}>8</div>
                <div className="nine" id="nine" onClick={()=>addValue(9)}>9</div>
                <div className="minus" id="subtract" onClick={()=>operation('-')}>-</div>
                <div className="four" id="four" onClick={()=>addValue(4)}>4</div>
                <div className="five" id="five" onClick={()=>addValue(5)}>5</div>
                <div className="six" id="six" onClick={()=>addValue(6)}>6</div>
                <div className="plus" id="add" onClick={()=>operation('+')}>+</div>
                <div className="one" id="one" onClick={()=>addValue(1)}>1</div>
                <div className="two" id="two" onClick={()=>addValue(2)}>2</div>
                <div className="three" id="three" onClick={()=>addValue(3)}>3</div>
                <div className="equal" id="equals" onClick={()=>equal()}>=</div>
                <div className="zero" id="zero" onClick={()=>addValue(0)}>0</div>
                <div className="point" id="decimal" onClick={()=>decimal()}>.</div>
            </div>
            <div>
            </div>
            <h3>Made by Francisco Paul Sotelo Rocha</h3>
        </div>
    )
}

export default Calculator;