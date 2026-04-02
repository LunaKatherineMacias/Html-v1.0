// Mensaje al hacer clic en el nombre
const nombre = document.getElementById("nombreClick");
const mensaje = document.getElementById("mensajeNombre");

nombre.addEventListener("click", () => {
    mensaje.style.display = "block";
    mensaje.style.opacity = 1;

    setTimeout(() => {
        mensaje.style.opacity = 0;
    }, 2500);

    setTimeout(() => {
        mensaje.style.display = "none";
    }, 3000);
});

// Ocultar/Mostrar secciones al hacer clic en el título
const titulos = document.querySelectorAll(".titulo-seccion");

titulos.forEach(titulo => {
    titulo.addEventListener("click", () => {
        const contenido = titulo.nextElementSibling;
        contenido.style.display =
            contenido.style.display === "none" ? "block" : "none";
    });
});
