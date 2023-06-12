const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
const botonAviso = document.getElementById("cerrar-aviso");
const ventanaModal = document.getElementById("ventana-modal");
const fondoModal = document.getElementById("fondo-modal");


//*Condicional
//* ! (si no hay nada guardadao repetir aviso)
if(!sessionStorage.getItem("ventana-modal-visto")){
    ventanaModal.classList.add("activo") 
    fondoModal.classList.add("activo") //*Mostramos la clase de html
}

botonAviso.addEventListener("click", () =>{ //*Funcion flecha
    ventanaModal.classList.remove("activo");//*eliminacion de clase en html
    fondoModal.classList.remove("activo");
    sessionStorage.setItem("ventana-modal-visto", true)//*Guardamos la informacion y no se repite aviso
})

