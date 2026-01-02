/*    VER / OCULTAR DETALLES    */
document.querySelectorAll(".ver-mas").forEach(btn => {
  btn.addEventListener("click", () => {
    const extra = btn.nextElementSibling;
    extra.classList.toggle("hidden");
    btn.textContent = extra.classList.contains("hidden")
      ? "Ver detalles"
      : "Ocultar detalles";
  });
});

/*    FILTROS (GÉNERO + DURACIÓN POR TIEMPO REAL)    */
const filtroGenero = document.getElementById("filtroGenero");
const filtroDuracion = document.getElementById("filtroDuracion");
const peliculas = document.querySelectorAll(".pelicula-row");

function aplicarFiltros() {
  const genero = filtroGenero.value;
  const duracion = filtroDuracion.value;

  peliculas.forEach(peli => {
    const peliGenero = peli.dataset.genero;
    const peliDuracion = parseInt(peli.dataset.duracion, 10);

    let mostrar = true;

    /* FILTRO GÉNERO */
    if (genero !== "all" && peliGenero !== genero) {
      mostrar = false;
    }

    /* FILTRO DURACIÓN (MINUTOS REALES) */
    if (duracion === "corta") {
      if (peliDuracion > 60) mostrar = false;
    }

    if (duracion === "media") {
      if (peliDuracion > 90) mostrar = false;
    }

    if (duracion === "larga") {
      if (peliDuracion <= 90) mostrar = false;
    }

    peli.style.display = mostrar ? "flex" : "none";
  });
}

if (filtroGenero && filtroDuracion) {
  filtroGenero.addEventListener("change", aplicarFiltros);
  filtroDuracion.addEventListener("change", aplicarFiltros);
}

/*    FORMULARIO ENTRADAS    */
document.getElementById("formCartelera").addEventListener("submit", e => {
  e.preventDefault();

  const peli = document.getElementById("selectPelicula").value;
  const hora = document.getElementById("selectHorario").value;

  if (!peli || !hora) return;

  /* POP UP EN PÁGINA */
  const popup = document.createElement("div");
  popup.textContent = "🎟️ Entradas enviadas a tu correo";
  popup.style.position = "fixed";
  popup.style.bottom = "30px";
  popup.style.right = "30px";
  popup.style.background = "#F8C94D";
  popup.style.color = "#3E0138";
  popup.style.padding = "15px 25px";
  popup.style.borderRadius = "30px";
  popup.style.fontFamily = "Trebuchet MS, Arial, sans-serif";
  popup.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
  popup.style.zIndex = "9999";

  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 3000);

  e.target.reset();
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