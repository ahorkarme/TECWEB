/*    CARRUSEL DE IMÁGENES    */

/* Se obtiene el contenedor que agrupa todas las imágenes del carrusel */
const images = document.getElementById('carouselImages');

/* Se comprueba que el carrusel exista en la página */
if (images) {

    /* Número total de imágenes */
    const totalImages = images.children.length;

    /* Índice de la imagen actual */
    let currentIndex = 0;

    /* Botones de navegación */
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    /* Evento para retroceder una imagen */
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    /* Evento para avanzar una imagen */
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}


/*    RULETA DE RECOMENDACIONES    */

/* Se seleccionan los elementos necesarios para la ruleta */
const ruleta = document.getElementById("ruleta");
const botonRuleta = document.getElementById("girarRuleta");
const resultado = document.getElementById("resultadoRuleta");

/* Se comprueba que los elementos existan */
if (ruleta && botonRuleta && resultado) {

    /* Opciones posibles de recomendación */
    const opciones = [
        "El diario de Noa 😭",
        "Ali G 😂",
        "Sinister 😱",
        "Seven 💀",
        "Blade Runner 🚀",
        "Orgullo y Prejuicio💗"
    ];

    /* Variable que almacena el giro acumulado */
    let giroActual = 0;

    /* Evento para girar la ruleta */
    botonRuleta.addEventListener("click", () => {

        /* Se genera un giro aleatorio (mínimo 3 vueltas completas) */
        const giroExtra = Math.floor(Math.random() * 360) + 1080;
        giroActual += giroExtra;

        /* Se aplica la rotación mediante CSS */
        ruleta.style.transform = `rotate(${giroActual}deg)`;

        /* Se calcula el ángulo final */
        const anguloFinal = giroActual % 360;

        /* Se determina el índice de la opción seleccionada */
        const index = Math.floor((360 - anguloFinal) / 60) % opciones.length;

        /* Se muestra el resultado tras finalizar la animación */
        setTimeout(() => {
            resultado.textContent =
                `🎬 Hoy te recomendamos: ${opciones[index]}`;
        }, 4000);
    });
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