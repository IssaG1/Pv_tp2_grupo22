import { agregarTexto } from './funcion.js';
let texto=document.querySelector('#texto');
let p=document.getElementById("parrafo");
texto.addEventListener("input",()=>{
    agregarTexto(p,texto);
})