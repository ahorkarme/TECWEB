const palabrasRelacionadas = ['energía', 'solar', 'sostenible', 'eólica', 'ahorro', 'renovable', 'limpia', 'naturaleza'];
const palabrasIrrelevantes = ['contaminación', 'emisiones', 'plástico', 'petróleo', 'carbón', 'no renovable', 'toxico'];

// Contenedor de las palabras
const contenedorPalabras = document.getElementById('contenedor-palabras');
const mensaje = document.getElementById('mensaje');
let palabrasRestantes = 0;

// Generar todas las palabras y mezclarlas
function generarPalabras() {
    const todasLasPalabras = [...palabrasRelacionadas, ...palabrasIrrelevantes]; // Unir ambas listas
    todasLasPalabras.sort(() => Math.random() - 0.5); // Mezclar las palabras aleatoriamente

    todasLasPalabras.forEach(palabra => {
        const esIrrelevante = palabrasIrrelevantes.includes(palabra); // Determinar si es irrelevante
        const elementoPalabra = crearElementoPalabra(palabra, esIrrelevante);
        contenedorPalabras.appendChild(elementoPalabra);
    });
}

// Crear un elemento de palabra
function crearElementoPalabra(palabra, esIrrelevante) {
    const elemento = document.createElement('span');
    elemento.classList.add('palabra');
    elemento.textContent = palabra;

    // Si es irrelevante, añadir evento para eliminarla
    if (esIrrelevante) {
        palabrasRestantes++;
        elemento.addEventListener('click', () => {
            elemento.remove();
            palabrasRestantes--;
            verificarVictoria();
        });
    }

    return elemento;
}

// Verificar si todas las palabras irrelevantes han sido eliminadas
function verificarVictoria() {
    if (palabrasRestantes === 0) {
        mensaje.textContent = '¡Felicidades! Has eliminado todas las palabras irrelevantes.';
    }
}

// Inicializar el juego
generarPalabras();