
console.log('Inicio del programa');

setTimeout(() => {
    console.log('Primer Tiemout');
}, 3000);

setTimeout(() => {
    console.log('Segundo Tiemout');
}, 0);

setTimeout(() => {
    console.log('Tercer Tiemout');
}, 0);

console.log('Fin del programa');