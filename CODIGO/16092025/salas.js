function permitirSoltar(event) {
    event.preventDefault();
  }

  function empezarArrastrar(event) {
    event.dataTransfer.setData("id", event.target.id);
  }

  // función para poder soltar el arbol dentro del prado
  function soltar(event) {
    event.preventDefault();
    const idArbol = event.dataTransfer.getData("id");
    const arbol = document.getElementById(idArbol);
    event.target.appendChild(arbol);
    arbol.style.position = "absolute";
    arbol.style.top = `${event.offsetY - 50}px`; // Ajustar la posición en la que se suelta el árbol 
    arbol.style.left = `${event.offsetX - 50}px`;
  }
  function finalizar(event){
      document.getElementById("mensaje").innerText = "¡Felicidades! Has reforestado el prado.";
  }