const images = document.getElementById('carouselImages');
const totalImages = images.children.length;
let currentIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
});

const opcions = [
    "Pelicula 1",
    "Pelicula 2",
    "Pelicula 3",
    "Pelicula 4",
    "Pelicula 5",
    "Pelicula 6"
];

function girar() {
    const ruleta = document.getElementById("ruleta");

    const girs = 360 * 5;  
    const aleatori = Math.floor(Math.random() * 360);  

    const rotacioFinal = girs + aleatori;

    ruleta.style.transform = `rotate(${rotacioFinal}deg)`;

    setTimeout(() => {
        const angle = aleatori % 360;
        const index = Math.floor(angle / (360 / opcions.length));
        document.getElementById("resultat").innerText =
            "Resultado: " + opcions[index];
    }, 4000);
}