
import { createRoot } from 'react-dom/client'
import App from "./App"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)

const test= "- -23";
const numeroCambiado = test.split(" ")[1].replace("-","");
const newTest = test.split(" ").splice(1,1,numeroCambiado).join(" ");
console.log(newTest) 