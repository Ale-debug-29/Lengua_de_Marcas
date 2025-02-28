let imagenes = document.getElementsByClassName('foto');
const numimagenes = imagenes.length;
let i = 0; // Índice de la imagen actual

function pasarimagenes() {
    // Ocultar todas las imágenes
    for (let img of imagenes) {
        img.style.display = "none";
    }

    // Mostrar la imagen actual
    imagenes[i].style.display = "block";

    // Avanzar al siguiente índice
    i = (i + 1) % numimagenes;

    // Llamar a la función después de 1 segundo
    setTimeout(pasarimagenes, 1000);
}

// Iniciar el carrusel
pasarimagenes();


function generarNumero() {
    let numero = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
    document.getElementById("vendidas").textContent = "Hamburgesas vendidas hoy: " + numero;
}

function enviar(){
    let boton = document.getElementById("enviado")
        alert("datos registrados correctamente")
    }


function borrar(){
    let borrar= document.getElementById("resetear");
    alert("datos borrados")


}





