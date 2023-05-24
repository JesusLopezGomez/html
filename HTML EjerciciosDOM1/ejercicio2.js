let enlace1 = document.getElementById('1');
let enlace2 = document.getElementById('2');
let enlace3 = document.getElementById('3');

let p1 = document.getElementById('uno');

enlace1.addEventListener(`click`,() => {
    if(p1.getAttribute('hidden') == ''){
        p1.removeAttribute('hidden');
        enlace1.textContent = "Ocultar contenidos";
    }else{
        p1.setAttribute('hidden','');
        enlace1.textContent = "Mostrar contenido";
    }
});

enlace2.addEventListener(`click`,() => {
    if(enlace2.textContent == "Ocultar contenidos"){
        enlace2.textContent = "Mostrar contenido";
    }else{
        enlace2.textContent = "Ocultar contenidos";
    }
});

enlace3.addEventListener(`click`,() => {
    if(enlace3.textContent == "Ocultar contenidos"){
        enlace3.textContent = "Mostrar contenido";
    }else{
        enlace3.textContent = "Ocultar contenidos";
    }
    
});