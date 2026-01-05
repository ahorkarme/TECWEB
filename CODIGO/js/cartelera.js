/*    VER / OCULTAR DETALLES    */
/* Se seleccionan todos los botones "Ver detalles" */
document.querySelectorAll(".ver-mas").forEach(btn => {

  btn.addEventListener("click", () => {

    /* El contenido extra está justo después del botón */
    const extra = btn.nextElementSibling;

    /* Se alterna la clase hidden */
    extra.classList.toggle("hidden");

    /* Se cambia el texto del botón */
    btn.textContent = extra.classList.contains("hidden")
      ? "Ver detalles"
      : "Ocultar detalles";
  });
});

/*    FILTROS (GÉNERO + DURACIÓN POR TIEMPO REAL)    */
const filtroGenero = document.getElementById("filtroGenero");
const filtroDuracion = document.getElementById("filtroDuracion");
const peliculas = document.querySelectorAll(".pelicula-row");

/* Función que aplica los filtros seleccionados */
function aplicarFiltros() {

  const genero = filtroGenero.value;
  const duracion = filtroDuracion.value;

  peliculas.forEach(peli => {

    /* Se obtienen los valores desde los atributos data-* */
    const peliGenero = peli.dataset.genero;
    const peliDuracion = parseInt(peli.dataset.duracion, 10);

    let mostrar = true;

    /* Filtro por género */
    if (genero !== "all" && peliGenero !== genero) {
      mostrar = false;
    }

    /* Filtro por duración */
    if (duracion === "corta" && peliDuracion > 60) mostrar = false;
    if (duracion === "media" && peliDuracion > 90) mostrar = false;
    if (duracion === "larga" && peliDuracion <= 90) mostrar = false;

    /* Se muestra u oculta la película */
    peli.style.display = mostrar ? "flex" : "none";
  });
}

/* Eventos de cambio en los filtros */
if (filtroGenero && filtroDuracion) {
  filtroGenero.addEventListener("change", aplicarFiltros);
  filtroDuracion.addEventListener("change", aplicarFiltros);
}

/*    BUSCADOR DE PELÍCULAS POR TEXTO    */
const buscador = document.getElementById("buscadorPeliculas");

/* Filtra películas según el texto introducido */
if (buscador) {

  buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    peliculas.forEach(peli => {

      /* Se busca el texto dentro del contenido de la tarjeta */
      const contenido = peli.textContent.toLowerCase();

      peli.style.display = contenido.includes(texto)
        ? "flex"
        : "none";
    });
  });
}


/*    FORMULARIO COMPRA DE ENTRADAS    */
const form = document.getElementById("formCartelera");
const popup = document.getElementById("popupConfirmacion");

if (form && popup) {

  form.addEventListener("submit", e => {
    e.preventDefault();

    const peli = document.getElementById("selectPelicula").value;
    const hora = document.getElementById("selectHorario").value;

    /* Validación básica */
    if (!peli || !hora) return;

    /* Se muestra el popup existente en el HTML */
    popup.classList.remove("hidden");

    /* Se oculta automáticamente tras 3 segundos */
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 3000);

    /* Se reinicia el formulario */
    form.reset();
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