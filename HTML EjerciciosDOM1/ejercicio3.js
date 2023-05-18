const BOTON = document.getElementById("saludar");

BOTON.addEventListener(`click`,function(){
    const APELLIDOS = document.getElementById('apellidos');
    const NOMBRE = document.getElementById('nombre');
    const SALUDO = document.getElementById('saludo');

    SALUDO.textContent = `Hola ${NOMBRE.value} ${APELLIDOS.value} bienvenido a esta página`;
})
