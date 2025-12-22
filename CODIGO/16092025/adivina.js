// Configuración del lienzo y fondo
const contenedorJuego = document.getElementById('contenedor-juego');
const lienzo = document.getElementById('oceano');
const contexto = lienzo.getContext('2d');
lienzo.width = contenedorJuego.offsetWidth;
lienzo.height = contenedorJuego.offsetHeight;

generarBasura()

// Función para generar basura aleatoriamente
function generarBasura() {
    const imagenesBasura = [
        'img/img-ods14-basura1.png',
        'img/img-ods14-basura2.png',
        'img/img-ods14-basura3.png'
    ];

    for (let i = 0; i < 10; i++) { // Genera 10 basuras
        const basura = document.createElement('img');
        basura.src = imagenesBasura[Math.floor(Math.random() * imagenesBasura.length)];
        basura.className = 'basura';
        basura.style.left = Math.random() * (contenedorJuego.offsetWidth - 50) + 'px';
        basura.style.top = Math.random() * (contenedorJuego.offsetHeight - 50) + 'px';
        contenedorJuego.appendChild(basura);

        // Evento para eliminar basura al hacer clic
        basura.addEventListener('click', () => {
            basura.remove();
            verificarCondicionVictoria();
        });
    }
}

// Verificar si se ha eliminado toda la basura
function verificarCondicionVictoria() {
    const basuraRestante = document.querySelectorAll('.basura');
    if (basuraRestante.length === 0) {
        alert('¡Felicidades! Has limpiado el océano.');
    }
}