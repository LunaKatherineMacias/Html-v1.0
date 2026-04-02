const formulario = document.getElementById("formulario");
const mensajeExito = document.getElementById("mensajeExito");

// Errores
const eNombre = document.getElementById("error-nombre");
const eCorreo = document.getElementById("error-correo");
const eDocumento = document.getElementById("error-documento");
const eGenero = document.getElementById("error-genero");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Valores
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let documento = document.getElementById("documento").value.trim();
    let genero = document.getElementById("genero").value;

    // Reset errores
    eNombre.textContent = "";
    eCorreo.textContent = "";
    eDocumento.textContent = "";
    eGenero.textContent = "";

    let valido = true;

    // Validaciones
    if (nombre.length < 3) {
        eNombre.textContent = "Debe tener mínimo 3 caracteres.";
        valido = false;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        eCorreo.textContent = "Correo inválido.";
        valido = false;
    }

    if (!/^[0-9]+$/.test(documento)) {
        eDocumento.textContent = "Solo números.";
        valido = false;
    }

    if (genero === "Selecciona una opción") {
        eGenero.textContent = "Selecciona un género.";
        valido = false;
    }

    // Si todo está correcto
    if (valido) {
        mensajeExito.classList.remove("oculto");
        formulario.reset();
    }
});
