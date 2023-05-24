let parrafos = document.getElementsByTagName('P');
let enlaces = document.getElementsByTagName('a');
console.log('Número de parrafos de la página: ' + parrafos.length);
console.log('Texto del segundo parrafo: ' + parrafos[1].textContent);
console.log('Número de enlaces de la página: ' + enlaces.length);
console.log('Dirección del primer enlace: ' + enlaces[0]);
console.log('Dirección del penultimo enlace: ' + enlaces[1]);
console.log('Numero de enlaces del primer parrafo: ' + parrafos[0].getElementsByTagName('a').length);