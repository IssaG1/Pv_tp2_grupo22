const $radios = document.querySelectorAll('input[type="radio"]');
const $resultado = document.getElementById('Resultado');

console.log($radios);

$radios.forEach((r) => { 
    r.addEventListener("change", (e) => {
        if (e.target.checked) {
            $resultado.innerHTML = `El valor seleccionado es: ${e.target.value}`;
        }
    })
})