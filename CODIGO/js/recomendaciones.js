/* CAMBIO DE SECCIONES RECO */

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".reco-btn");
    const sections = document.querySelectorAll(".reco-section");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const target = button.dataset.section;

            const targetSection = document.querySelector(
                `.reco-section.${target}`
            );

            if (!targetSection) {
                console.error("No existe la sección:", target);
                return;
            }

            // Desactivar todos
            buttons.forEach(btn => btn.classList.remove("active"));
            sections.forEach(sec => sec.classList.remove("active"));

            // Activar actual
            button.classList.add("active");
            targetSection.classList.add("active");
        });
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