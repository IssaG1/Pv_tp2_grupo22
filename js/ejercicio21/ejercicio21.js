const $input = document.getElementById("input-id"),
$parrafo = document.getElementById("parrafo");

$input.addEventListener("input", e =>{
    console.log(e.target.value)
    $parrafo.textContent = e.target.value
})