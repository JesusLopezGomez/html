const BOTON = document.getElementById("ordenar");

BOTON.addEventListener(`click`,function(){

    let numTexto = document.getElementById("numeros").value;
  
    let numArray = numTexto.split(",");
  
    let numSinOrdenar = numArray.map(function(num) {
      return parseInt(num.trim());
    });
  
    let numOrdenados = numSinOrdenar.sort(function(a, b) {
      return a - b;
    });
  
    let numOrdenadosDevuelto = numOrdenados.join(",");
  
    let resultado = document.getElementById("ordenado");
    resultado.textContent = numOrdenadosDevuelto;
});




