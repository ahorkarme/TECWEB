/*    MOSTRAR / OCULTAR INFORMACIÓN EXTRA DE CADA ODS    */

/* Se seleccionan todos los botones que permiten desplegar
   información adicional sobre cada ODS */
document.querySelectorAll('.ods-toggle').forEach(button => {

    /* Se asigna un evento click a cada botón */
    button.addEventListener('click', () => {

        /* Se obtiene el elemento hermano siguiente, que contiene
           la información extra asociada a ese ODS */
        const extra = button.nextElementSibling;

        /* Se alterna la clase 'hidden' para mostrar u ocultar
           el contenido adicional */
        extra.classList.toggle('hidden');
    });
});

/*    ACTIVACIÓN VISUAL DE BLOQUES ODS (ESTADO ACTIVO)    */

/* Se seleccionan todos los bloques ODS */
const odsBlocks = document.querySelectorAll('.ods-block');

/* A cada bloque se le asigna un evento click */
odsBlocks.forEach(block => {

    block.addEventListener('click', () => {

        /* Se elimina la clase 'active' de todos los bloques
           para asegurar que solo uno esté activo */
        odsBlocks.forEach(b => b.classList.remove('active'));

        /* Se activa únicamente el bloque seleccionado */
        block.classList.add('active');
    });
});

/*    CAMBIO DE DISPOSICIÓN (LISTA / GRID)    */

/* Botón que permite cambiar la estructura visual */
document.getElementById('cambiarVista').addEventListener('click', () => {

    /* Se alterna la clase 'grid-view' en el contenedor principal
       para cambiar entre vista en columna y vista en cuadrícula */
    document
        .getElementById('odsContainer')
        .classList.toggle('grid-view');
});

/*    ORMULARIO ODS CON RESPUESTA Y BARRA DE PORCENTAJE    */

/* Objeto que asocia cada ODS con un porcentaje ficticio */
const porcentajesODS = {
    "ODS 10": 42,
    "ODS 11": 33,
    "ODS 12": 58
};

/* Se captura el evento de envío del formulario */
document.getElementById('odsForm').addEventListener('submit', e => {

    /* Se evita el envío real del formulario */
    e.preventDefault();

    /* Se obtiene la opción seleccionada */
    const selected = document.querySelector('input[name="ods"]:checked');

    /* Referencias a los elementos donde se mostrará la respuesta */
    const output = document.getElementById('respuestaODS');
    const progress = document.getElementById('odsProgress');
    const bar = document.getElementById('odsProgressBar');
    const porcentajeTexto = document.getElementById('odsPorcentaje');

    /* Validación: si no hay opción seleccionada */
    if (!selected) {
        output.textContent = 'Por favor, selecciona un ODS antes de enviar.';
        return;
    }

    /* Se obtiene el valor del ODS seleccionado */
    const valor = selected.value;

    /* Se obtiene el porcentaje asociado a ese ODS */
    const porcentaje = porcentajesODS[valor];

    /* Se muestra el mensaje principal */
    output.textContent = `Has elegido ${valor}.`;

    /* Se muestra el texto con el porcentaje */
    porcentajeTexto.textContent =
        `Formas parte del ${porcentaje}% de personas que se identifican con este ODS.`;

    /* Se hace visible la barra de progreso */
    progress.classList.remove('hidden');

    /* Se reinicia la animación de la barra */
    bar.style.width = '0%';

    /* Se aplica el ancho correspondiente tras un pequeño retardo
       para activar la transición CSS */
    setTimeout(() => {
        bar.style.width = porcentaje + '%';
    }, 100);
});

/*    DRAG & DROP CON VALIDACIÓN    */

/* Variables para controlar la acción arrastrada */
let accionActual = null;
let contenedorOriginal = null;

/* Se asigna el evento dragstart a cada acción */
document.querySelectorAll('.accion').forEach(accion => {

    accion.addEventListener('dragstart', () => {
        accionActual = accion;
        contenedorOriginal = accion.parentElement;
    });
});

/* Se configuran las zonas de destino */
document.querySelectorAll('.ods-drop').forEach(zone => {

    /* Permite que el elemento pueda soltarse */
    zone.addEventListener('dragover', e => {
        e.preventDefault();
    });

    /* Evento drop */
    zone.addEventListener('drop', () => {

        if (!accionActual) return;

        /* Se obtiene el ODS correcto y el ODS de la zona */
        const odsCorrecto = accionActual.dataset.correct;
        const odsZona = zone.dataset.ods;

        /* Se limpian estados previos */
        zone.classList.remove('correct', 'incorrect');
        accionActual.classList.remove('correct', 'incorrect');

        /* Comprobación de coincidencia */
        if (odsCorrecto === odsZona) {

            /* Si es correcto, se mueve el elemento */
            zone.appendChild(accionActual);
            zone.classList.add('correct');
            accionActual.classList.add('correct');

        } else {

            /* Si es incorrecto, se muestra feedback visual */
            zone.classList.add('incorrect');
            accionActual.classList.add('incorrect');

            /* Se devuelve el elemento a su posición original */
            setTimeout(() => {
                contenedorOriginal.appendChild(accionActual);
                accionActual.classList.remove('incorrect');
                zone.classList.remove('incorrect');
            }, 800);
        }

        accionActual = null;
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