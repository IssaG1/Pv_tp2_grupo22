const $input = document.getElementById("input-id"),
$parrafo = document.getElementById("parrafo");

$input.addEventListener("input", e =>{
    const textoParrafo = e.target.value
    $parrafo.textContent = textoParrafo
    if(textoParrafo.length === 20){
        $parrafo.style.backgroundColor= "yellow"
    }
})