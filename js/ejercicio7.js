/* ejercicio buble */
let nombres = ["Juan", "Pedro", "Maria", "Jose", "Luis", "Ana"];
let nombreLargo= nombres[0];

for(let i = 1; i<nombres.length; i++){
    if(nombres[i].length > nombreLargo.length){
        nombreLargo = nombres[i]
    }
}
console.log(`el nombre mas largo es: ${nombreLargo}`);
