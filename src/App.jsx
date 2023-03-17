import React from "react"
import Boton from "./components/Boton"


export default function App(){
const [num1, setOp1] = React.useState("");;
const [operador, setOperador] = React.useState("");
const [memoria, setMemo] = React.useState("");
const valoresBotones = [
"MC","MRC","M-","M+",
"7","8","9","X","÷",
"4","5","6","-","√",
"1","2","3","%","+",
"CE","0",".","POS/NEG","="
];
const pantallaAntesDisplay = {
display: num1 !== "" ? "block" : "none",
}

const calcBotones = valoresBotones.map((valor,index) => <Boton 
key={index} 
handleOperador= {handleOperador} 
handleAgregar= {handleAgregar}
handleIgual = {handleIgual}
handleOpSecundario = {modificar}
handleClear = {clear}
handleMemoAdd = {agregarMemo}
handleMemoRest = {restarMemo}
handleMemoCall = {llamarMemoria}
handleMemoClear = {limpiarMemoria}
valor={valor}
estiloOP= {/[0-9]|CE|\./.test(valor) ? false : true} 
/>);

//Calculator functionalities

function handleAgregar(event){
   const pantalla = document.querySelector(".calculadora--pantalla");
   const valor = event.target.textContent;
if(valor.match(/[0-9]/)){
   pantalla.textContent = pantalla.textContent === undefined ? valor : pantalla.textContent + valor;
} else if(valor == "." && /\./.test(pantalla.textContent) === false && pantalla.textContent !== ""){
   pantalla.textContent = pantalla.textContent + ".";
} else return
}

function modificar(event){
 const pantalla = document.querySelector(".calculadora--pantalla");
 const valor = event.target.textContent;

 if(valor === "√"){
      if(num1 === ""){
         pantalla.textContent = Math.sqrt(Number(pantalla.textContent));
      } else if(pantalla.textContent !== operador + " " | pantalla.textContent !== ""){
       const oldNumber = pantalla.textContent.split(" ")[1];
        let numeroCambiado = Math.sqrt(Number(oldNumber));
         pantalla.textContent = pantalla.textContent.replace(oldNumber, numeroCambiado);
      } else return
      }

 if(valor === "POS/NEG"){
   if(num1 === ""){
      //Caso uno
      console.log("funcion asignada correctamente)")
   if(/-/.test(pantalla.textContent) == false){
      pantalla.textContent = "-" + pantalla.textContent;
   } else if(/-/.test(pantalla.textContent) == true){
      pantalla.textContent = pantalla.textContent.replace("-","");
      };
//Caso dos
   } else if(pantalla.textContent !== operador + " "){
      if(/-? -/.test(pantalla.textContent) == false){
         const numeroViejo = pantalla.textContent.split(" ")[1]
       const numeroCambiado = "-" + numeroViejo;
      pantalla.textContent = pantalla.textContent.replace(numeroViejo, numeroCambiado);
      } else {
         const numeroViejo = pantalla.textContent.split(" ")[1]
       const numeroCambiado = numeroViejo.split("-")[1]; 
       pantalla.textContent = pantalla.textContent.replace(numeroViejo,numeroCambiado);
      }
   }
 
}     
}

function  calcular(primerNum, segundoNum, operador){
   const pantalla = document.querySelector(".calculadora--pantalla");
   const numeroPrevio = document.querySelector(".calculadora--pantalla--antes");
   let calculado;
   switch(operador){
   case "+" :  
   calculado = primerNum + segundoNum;
      break;
   case "-":  
   calculado = primerNum - segundoNum;
      break;
   case "X":  
   calculado = primerNum * segundoNum;
      break;
   case "÷":  
   calculado = primerNum / segundoNum;
      break;
   case "%":
   calculado = (primerNum * segundoNum) / 100;
      break;
   default:console.log("weird shit happn")
   }
   return calculado;
}

function handleOperador(event){
const valorOperador = event.target.textContent;
const pantalla = document.querySelector(".calculadora--pantalla");
const numeroPrevio = document.querySelector(".calculadora--pantalla--antes")
if(num1 === ""){
      setOp1(  Number(pantalla.textContent) );
      setOperador(valorOperador);
      numeroPrevio.textContent =  pantalla.textContent;
      pantalla.textContent = valorOperador + " ";

} else if (pantalla.textContent !== valorOperador + " ") {
      const num2 = Number(pantalla.textContent.split(" ")[1]);
      setOperador(valorOperador);
      numeroPrevio.textContent = calcular(num1, num2, operador);
      setOp1(Number(numeroPrevio.textContent));
      pantalla.textContent = valorOperador + " ";
} else return

}

function handleIgual(){
   const pantalla = document.querySelector(".calculadora--pantalla");
   const numeroPrevio = document.querySelector(".calculadora--pantalla--antes")
if(num1 !== "" && operador != ""){
   const num2 = Number(pantalla.textContent.split(" ")[1]);
   pantalla.textContent = calcular(num1, num2, operador);
   setOp1("");
   setOperador("");
   numeroPrevio.textContent = ""  
} else return   
}

function clear(){
const pantalla = document.querySelector(".calculadora--pantalla");
const numeroPrevio = document.querySelector(".calculadora--pantalla--antes");
setOp1("");
setOperador("");
pantalla.textContent = "";
numeroPrevio.textContent = "";
}

//FUNCIONES DE MEMORIA

function agregarMemo(){
 const pantalla = document.querySelector(".calculadora--pantalla");
 if(memoria == ""){
 if(num1 == ""){ setMemo(Number(pantalla.textContent)) }
 else if(pantalla.textContent !== operador + " " && operador !== "%"){
 setMemo(Number(pantalla.textContent.split(" ")[1]))
 } else return;
} else {
  if(num1 == ""){setMemo(oldMemo => oldMemo + Number(pantalla.textContent))}
  else if(pantalla.textContent !== operador + " " && operador !== "%"){
   setMemo( oldMemo => oldMemo + Number(pantalla.textContent.split(" ")[1]) )
  } else return; 
}};

function restarMemo(){
   const pantalla = document.querySelector(".calculadora--pantalla");
   if(memoria !== ""){
     if(num1 == ""){ setMemo( oldMemo => oldMemo - Number(pantalla.textContent) ) }
     else if(pantalla.textContent !== operador + " " && operador !== "%"){
      setMemo( oldMemo => oldMemo - Number(pantalla.textContent.split(" ")[1]) )
     } 
   } else return
};

function llamarMemoria(){
   const pantalla = document.querySelector(".calculadora--pantalla");
   clear();
   pantalla.textContent = memoria;
};

function limpiarMemoria(){ setMemo("") };


return(
<div className="calculadora--main mt-4">
   <h3 style={pantallaAntesDisplay} className="calculadora--pantalla--antes"></h3>
   <h3 className="calculadora--pantalla mt-2"></h3>
   <div className="calculadora--body container p-1 m-1">
      {calcBotones}
   </div>
  {memoria !== "" && <h3 className="calculadora--memoria-output">Numero en memoria: {memoria}</h3>} 
</div>
)}