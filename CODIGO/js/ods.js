/*    APARICIÓN / DESAPARICIÓN    */

document.querySelectorAll('.ods-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const extra = button.nextElementSibling;
        extra.classList.toggle('hidden');
    });
});

/*    CAMBIO DE ESTILOS (GRUPO)    */

const odsBlocks = document.querySelectorAll('.ods-block');

odsBlocks.forEach(block => {
    block.addEventListener('click', () => {
        odsBlocks.forEach(b => b.classList.remove('active'));
        block.classList.add('active');
    });
});

/*    CAMBIO DE ESTRUCTURA    */
document.getElementById('cambiarVista').addEventListener('click', () => {
    document.getElementById('odsContainer').classList.toggle('grid-view');
});

/*    FORMULARIO CON RESPUESTA + PORCENTAJE    */

const porcentajesODS = {
    "ODS 10": 42,
    "ODS 11": 33,
    "ODS 12": 58
};

document.getElementById('odsForm').addEventListener('submit', e => {
    e.preventDefault();

    const selected = document.querySelector('input[name="ods"]:checked');
    const output = document.getElementById('respuestaODS');
    const progress = document.getElementById('odsProgress');
    const bar = document.getElementById('odsProgressBar');
    const porcentajeTexto = document.getElementById('odsPorcentaje');

    if (!selected) {
        output.textContent = 'Por favor, selecciona un ODS antes de enviar.';
        return;
    }

    const valor = selected.value;
    const porcentaje = porcentajesODS[valor];

    output.textContent = `Has elegido ${valor}.`;
    porcentajeTexto.textContent =
        `Formas parte del ${porcentaje}% de personas que se identifican con este ODS.`;

    progress.classList.remove('hidden');

    // reset animación
    bar.style.width = '0%';
    setTimeout(() => {
        bar.style.width = porcentaje + '%';
    }, 100);
});

/*    DRAG & DROP CON VALIDACIÓN    */

let accionActual = null;
let contenedorOriginal = null;

document.querySelectorAll('.accion').forEach(accion => {
    accion.addEventListener('dragstart', () => {
        accionActual = accion;
        contenedorOriginal = accion.parentElement;
    });
});

document.querySelectorAll('.ods-drop').forEach(zone => {

    zone.addEventListener('dragover', e => {
        e.preventDefault();
    });

    zone.addEventListener('drop', () => {
        if (!accionActual) return;

        const odsCorrecto = accionActual.dataset.correct;
        const odsZona = zone.dataset.ods;

        // netejar estats previs
        zone.classList.remove('correct', 'incorrect');
        accionActual.classList.remove('correct', 'incorrect');

        if (odsCorrecto === odsZona) {
            zone.appendChild(accionActual);
            zone.classList.add('correct');
            accionActual.classList.add('correct');
        } else {
            zone.classList.add('incorrect');
            accionActual.classList.add('incorrect');

            // tornar a l'origen
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