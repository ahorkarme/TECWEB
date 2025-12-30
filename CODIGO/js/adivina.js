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