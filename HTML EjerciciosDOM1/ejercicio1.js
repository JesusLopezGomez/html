const ENLACE = document.getElementById("enlace");

ENLACE.addEventListener('click',function(){
    let oculto = document.getElementById('oc');
    oculto.classList.replace('oculto','visible');
    ENLACE.classList.replace('enlace','oculto');
});



