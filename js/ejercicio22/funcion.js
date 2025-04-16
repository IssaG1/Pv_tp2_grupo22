export const agregarTexto=(p,texto)=>{
    if(texto.value.length>=20){
        p.textContent = texto.value;
        p.classList.remove("c1");
        p.classList.add("c2");
    }
    else
    {
        p.textContent = texto.value;
        p.classList.remove("c2");
        p.classList.add("c1");
    }
    }