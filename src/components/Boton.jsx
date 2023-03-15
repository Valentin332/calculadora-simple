import React from "react"

export default function Boton(props){
    const operadoresRegExp = /^(\+|-|X|÷|%)/;
 let handleClick 

 if(operadoresRegExp.test(props.valor)){ handleClick = props.handleOperador }
 else if(props.valor == "="){ handleClick = props.handleIgual }
 else if(props.valor == "√"){ handleClick = props.handleOpSecundario}
 else if (props.valor == "POS/NEG"){handleClick = props.handleOpSecundario}
 else if (props.valor == "CE"){handleClick = props.handleClear}
 else if(props.valor == "M+"){handleClick = props.handleMemoAdd}
 else if(props.valor == "M-"){handleClick = props.handleMemoRest}
 else if(props.valor == "MC"){handleClick = props.handleMemoClear}
 else if(props.valor == "MRC"){handleClick = props.handleMemoCall}
 else { handleClick = props.handleAgregar };

    return(
        <button onClick={handleClick} type="button" 
        value={props.valor} 
        className= { props.valor === "=" ? "btn boton btn-success mx-1 my-1" : "btn boton btn-primary mx-1 my-1" }>
        {props.valor}
        </button>
        )
}