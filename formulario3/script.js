const formulario = document.getElementById("formulario");
const mensajeExito = document.getElementById("mensajeExito");

// Errores
const eTipoDocumento = document.getElementById("error-tipoDocumento");
const eDocumento = document.getElementById("error-documento");
const eNombre = document.getElementById("error-nombre");
const eCorreo = document.getElementById("error-correo");
const eTelefono = document.getElementById("error-telefono");
const eGenero = document.getElementById("error-genero");
const eFecha = document.getElementById("error-fecha");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Valores
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let documento = document.getElementById("documento").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let genero = document.getElementById("genero").value;
    let fecha = document.getElementById("fecha").value;

    // Reset errores
    eTipoDocumento.textContent = "";
    eDocumento.textContent = "";
    eNombre.textContent = "";
    eCorreo.textContent = "";
    eTelefono.textContent = "";
    eGenero.textContent = "";
    eFecha.textContent = "";

    let valido = true;

    // VALIDACIONES -----------------------------

    if (tipoDocumento === "Selecciona una opción") {
        eTipoDocumento.textContent = "Selecciona un tipo de documento.";
        valido = false;
    }

    if (!/^[0-9]+$/.test(documento)) {
        eDocumento.textContent = "Solo números permitidos.";
        valido = false;
    } else if (documento.length < 10) {
        eDocumento.textContent = "Debe tener mínimo 10 dígitos.";
        valido = false;
    }

    if (nombre.length < 3) {
        eNombre.textContent = "Debe tener mínimo 3 caracteres.";
        valido = false;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        eCorreo.textContent = "Correo inválido.";
        valido = false;
    }

    if (!/^[0-9]+$/.test(telefono)) {
        eTelefono.textContent = "El teléfono debe contener solo números.";
        valido = false;
    } else if (telefono.length < 10) {
        eTelefono.textContent = "Debe tener mínimo 10 dígitos.";
        valido = false;
    }

    if (genero === "Selecciona una opción") {
        eGenero.textContent = "Selecciona un género.";
        valido = false;
    }

    if (fecha === "") {
        eFecha.textContent = "Selecciona una fecha.";
        valido = false;
    }

    // SI TODO ESTÁ CORRECTO --------------------
    if (valido) {
        mensajeExito.classList.remove("oculto");
        formulario.reset();
    }
});
