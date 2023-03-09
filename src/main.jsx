
import { createRoot } from 'react-dom/client'
import App from "./App"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)

const prueba = "+ 2454554654654645654645.222";
console.log(prueba.split(" ")[1])