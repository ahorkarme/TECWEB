  /*    FORMULARIO DE CONTACTO    */

function enviar(){
    const nombre = document.getElementById('nom').value.trim();
    const correo = document.getElementById('correoe').value.trim();
    const comentario = document.getElementById('comentario').value.trim();

    if (nombre && correo && comentario) {
        // Ocultar el formulario
        document.getElementById('form').style.display = 'none';
        // Mostrar el mensaje de éxito
        document.querySelector('.success-message').style.display = 'block';
        return false; // Prevenir el envío del formulario
    } else {
        alert('Por favor, rellena todos los campos.');
        return false;
    }
}
function reset(){
    const formulario= document.getElementById('form');
    formulario.reset()
  }

document.addEventListener('DOMContentLoaded', function() {
    const showFormBtn = document.getElementById('showFormBtn');
    const form = document.getElementById('form');

    showFormBtn.addEventListener('click', function() {
        if (form.classList.contains('show')) {
            form.classList.remove('show');
            showFormBtn.textContent = 'Contactar con nosotros';
        } else {
            form.classList.add('show');
            showFormBtn.textContent = 'Ocultar formulario';
        }
    });
});

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