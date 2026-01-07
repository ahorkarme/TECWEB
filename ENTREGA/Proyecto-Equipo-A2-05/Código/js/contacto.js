/*    MOSTRAR / OCULTAR FORMULARIO DE CONTACTO    */
/* Se espera a que el DOM esté completamente cargado */
document.addEventListener('DOMContentLoaded', () => {

    const showFormBtn = document.getElementById('showFormBtn');
    const form = document.getElementById('form');
    const successMessage = document.querySelector('.success-message');
    const resetFormBtn = document.getElementById('resetFormBtn');

    /* Mostrar / ocultar formulario */
    showFormBtn.addEventListener('click', () => {

        form.classList.toggle('show');
        successMessage.classList.remove('show');

        showFormBtn.textContent = form.classList.contains('show')
            ? 'Ocultar formulario'
            : 'Mostrar formulario';
    });

    /* Botón "Enviar otra respuesta" */
    resetFormBtn.addEventListener('click', () => {

        successMessage.classList.remove('show');
        form.classList.add('show');
        form.reset();

        showFormBtn.textContent = 'Ocultar formulario';
    });
});

/*    VALIDACIÓN Y ENVÍO DEL FORMULARIO DE CONTACTO    */

/* Función que se ejecuta al pulsar el botón "Enviar" */
function enviar() {

    /* Se obtienen los valores de los campos del formulario */
    const nombre = document.getElementById('nom').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const comentario = document.getElementById('comentario').value.trim();

    /* Se comprueba que todos los campos estén rellenos */
    if (nombre && correo && comentario) {

        /* Se oculta el formulario */
        document.getElementById('form').classList.remove('show');

        /* Se muestra el mensaje de confirmación */
        document.querySelector('.success-message').classList.add('show');

        /* Se evita el envío real del formulario */
        return false;

    } else {

        /* Mensaje de aviso si falta algún campo */
        alert('Por favor, rellena todos los campos.');
        return false;
    }
}

/*    REINICIO MANUAL DEL FORMULARIO    */

/* Función asociada al botón de tipo reset */
function resetForm() {

    /* Se obtiene el formulario */
    const form = document.getElementById('form');
    const successMessage = document.querySelector('.success-message');

    /* Se reinician todos los campos */
    form.reset();

    /* Se asegura que el formulario vuelva a mostrarse */
    form.classList.add('show');

    /* Se oculta el mensaje de éxito si estaba visible */
    successMessage.classList.remove('show');
}

/*    RATÓN    */
/* Efecto visual que sigue el movimiento del ratón */
document.addEventListener("mousemove", (e) => {
    // Se crea un elemento visual para el efecto
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");

    // Se posiciona el efecto en la posición del cursor
    glow.style.left = `${e.clientX - 6}px`;
    glow.style.top = `${e.clientY - 6}px`;

    // Se añade al documento
    document.body.appendChild(glow);

    // Se elimina tras un breve tiempo para no saturar el DOM
    setTimeout(() => {
        glow.remove();
    }, 800);
});