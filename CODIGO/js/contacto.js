  /*    FORMULARIO DE CONTACTO    */

function enviar(){
    const nombre = document.getElementById('nom').value;
    const correo = document.getElementById('correoe').value;
    const comentario = document.getElementById('comentario').value;
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

document.addEventListener("mousemove", (e) => {
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");

    glow.style.left = `${e.clientX - 6}px`;
    glow.style.top = `${e.clientY - 6}px`;

    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 800);
});