import React from "react"

export default function Boton(props){
    const operadoresRegExp = /^(\+|-|X|÷)/;
 let handleClick 

 if(operadoresRegExp.test(props.valor)){ handleClick = props.handleOperador }
 else if(props.valor == "="){ handleClick = props.handleIgual }
 else if(props.valor == "√"){ handleClick = props.handleOpSecundario}
 else if (props.valor === "masomenos"){handleClick = props.handleOpSecundario}
 else { handleClick = props.handleAgregar };

    return(
        <button onClick={handleClick} type="button" 
        value={props.valor} 
        className= { props.valor === "=" ? "btn boton btn-success mx-1 my-1" : "btn boton btn-primary mx-1 my-1" }>
        {props.valor}
        </button>
        )
}