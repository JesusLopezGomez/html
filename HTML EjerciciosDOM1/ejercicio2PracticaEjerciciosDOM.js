const ANNIDIR = document.getElementById('anniadirElemento');
const BORRAR_PRIMER = document.getElementById('borrarPrimero');
const BORRRAR_ULTIMO = document.getElementById('borrarUltimo');

const LISTA_PADRE = document.getElementById('list');

ANNIDIR.addEventListener(`click`,function(){
    let elemento = prompt('Introduzca el elemento que quiere añadir');
    if(elemento != ""){
        LISTA_PADRE.insertAdjacentHTML(`beforeend`,`<li> ${elemento} </li>`);
    }
})

BORRAR_PRIMER.addEventListener(`click`,function(){
    LISTA_PADRE.removeChild(LISTA_PADRE.firstChild);
})

BORRRAR_ULTIMO.addEventListener(`click`,function(){
    LISTA_PADRE.removeChild(LISTA_PADRE.lastChild);
})

let textoCambiar = document.getElementById('textDefault');
let textoNuevo = document.getElementById('texto');
const BOTON_CAMBIAR = document.getElementById('cambiar');

BOTON_CAMBIAR.addEventListener(`click`,function(){
    if(textoNuevo.value != ""){
        textoCambiar.textContent = textoNuevo.value;
    }
})