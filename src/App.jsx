import React from "react"
import Boton from "./components/Boton"


export default function App(){
const [num1, setOp1] = React.useState("");
const [num2, setOp2] = React.useState("");
const [operador, setOperador] = React.useState("");
const valoresBotones = [
"MC","MRC","M-","M+",
"7","8","9","X","÷",
"4","5","6","-","√",
"CL","1","2","3","+",
"CE","0",".","+/-","="
];

const calcBotones = valoresBotones.map((valor,index) => <Boton 
key={index} 
handleOperador= {handleOperador} 
handleAgregar= {handleAgregar}
handleIgual = {handleIgual} 
valor={valor} 
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

function  calcular(primerNum, segundoNum, operador){
   const pantalla = document.querySelector(".calculadora--pantalla");
   const numeroPrevio = document.querySelector(".calculadora--pantalla--antes");
   console.log(primerNum);
   console.log(segundoNum);
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
   default:console.log("weird shit happn")
   }
   console.log(calculado)
   setOp1(calculado);
  setOp2("");
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
      setOp2(  Number(pantalla.textContent.split(" ")[1])   );
      calcular( num1 , num2 , operador );
      setOperador(valorOperador);
      numeroPrevio.textContent = num1;
      pantalla.textContent = valorOperador + " ";
} else return

}
function handleIgual(){
   const pantalla = document.querySelector(".calculadora--pantalla");
   const numeroPrevio = document.querySelector(".calculadora--pantalla--antes")
if(num1 != "" && operador != ""){
   setOp2(Number(pantalla.textContent.split(" ")[1]));
   calcular(   num1 , num2 , operador );
   setOperador("");
   pantalla.textContent = num1
   setOp1("")
   numeroPrevio.textContent = ""  
} else return   
}


return(
<div className="calculadora--main">
   <h1>App</h1>
   <h3 className="calculadora--pantalla--antes"></h3>
   <h3 className="calculadora--pantalla"></h3>
   <div className="calculadora--body container p-1 m-1">
      {calcBotones}
   </div>
</div>
)}