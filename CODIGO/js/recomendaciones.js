/* CAMBIO DINÁMICO DE SECCIONES DE RECOMENDACIONES */

/* Se espera a que el DOM esté completamente cargado
   antes de acceder a los elementos de la página */
document.addEventListener("DOMContentLoaded", () => {

    /* Se seleccionan todos los botones de categorías */
    const buttons = document.querySelectorAll(".reco-btn");

    /* Se seleccionan todas las secciones de recomendaciones */
    const sections = document.querySelectorAll(".reco-section");

    /* Se recorre cada botón para asignarle un evento click */
    buttons.forEach(button => {

        button.addEventListener("click", () => {

            /* Se obtiene el valor del atributo data-section
               del botón pulsado */
            const target = button.dataset.section;

            /* Se busca la sección correspondiente a ese valor */
            const targetSection = document.querySelector(
                `.reco-section.${target}`
            );

            /* Control de error por si la sección no existe */
            if (!targetSection) {
                console.error("No existe la sección:", target);
                return;
            }

            /* Se desactivan todas las secciones y botones */
            buttons.forEach(btn => btn.classList.remove("active"));
            sections.forEach(sec => sec.classList.remove("active"));

            /* Se activa el botón pulsado */
            button.classList.add("active");

            /* Se activa la sección correspondiente */
            targetSection.classList.add("active");
        });

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