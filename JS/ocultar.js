let imagen = document.querySelector("#TarifaNacional");

let boton = document.querySelector("#ocultar").addEventListener("click", function() {
    imagen.style.left =  '-87%';  
});
let boton2 = document.querySelector("#mostrar").addEventListener("click", function() {
    imagen.style.left =  '3%';  
});