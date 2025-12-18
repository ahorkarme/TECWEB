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