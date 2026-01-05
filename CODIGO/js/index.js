/*    CARRUSEL    */

const images = document.getElementById('carouselImages');

if (images) {
    const totalImages = images.children.length;
    let currentIndex = 0;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}


/*    RULETA    */

const ruleta = document.getElementById("ruleta");
const botonRuleta = document.getElementById("girarRuleta");
const resultado = document.getElementById("resultadoRuleta");

if (ruleta && botonRuleta && resultado) {

    const opciones = [
        "El diario de Noa 😭",
        "Ali G 😂",
        "Sinister 😱",
        "Seven 💀",
        "Blade Runner 🚀",
        "Orgullo y Prejuicio"
    ];

    let giroActual = 0;

    botonRuleta.addEventListener("click", () => {
        const giroExtra = Math.floor(Math.random() * 360) + 1080; // mínim 3 voltes
        giroActual += giroExtra;

        ruleta.style.transform = `rotate(${giroActual}deg)`;

        const anguloFinal = giroActual % 360;
        const index = Math.floor((360 - anguloFinal) / 60) % opciones.length;

        setTimeout(() => {
            resultado.textContent = `🎬 Hoy te recomendamos: ${opciones[index]}`;
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