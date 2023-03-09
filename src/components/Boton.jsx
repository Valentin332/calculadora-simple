import React from "react"

export default function Boton(props){
    const operadoresRegExp = /^(\+|-|X|÷)/;
   const handleClick = operadoresRegExp.test(props.valor) ? props.handleOperador : props.handleAgregar;
    return(
        <button onClick={handleClick} type="button" 
        value={props.valor} 
        className= { props.valor === "=" ? "btn boton btn-success mx-1 my-1" : "btn boton btn-primary mx-1 my-1" }>
        {props.valor}
        </button>
        )
}