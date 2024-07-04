let imagen = document.querySelectorAll('.imagenHover'); //Llama a todos los elementos con la clase imagenHover

imagen.forEach(imagen=>{ 
imagen.addEventListener('mouseenter', function() { // Realiza la funcion entrar con el mouse (hover) y le aplica ese width a todos los elementos guardados en la variable imagen
    imagen.style.width =  '600px';   
})
    
imagen.addEventListener('mouseleave', function() { // Realiza la funcion salir con el mouse (hover) y le aplica ese width a todos los elementos guardados en la variable imagen
    imagen.style.width =  '550px';    
})
})