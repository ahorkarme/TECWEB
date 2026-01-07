/*    MINIJUEGO: ¿QUÉ PERSONAJE DE FICCIÓN ERES?    */
/* Objeto que almacena la puntuación acumulada
   de cada tipo de personalidad */
let scores = {
    aventurero: 0,
    intelectual: 0,
    rebelde: 0,
    romantico: 0,
    introvertido: 0,
    extrovertido: 0,
    rarito: 0
};

/* Índice de la pregunta actual */
let questionIndex = 0;

/*    PREGUNTAS DEL TEST    */
const questions = [
    {
        text: "1. ¿Qué plan prefieres un viernes por la noche?",
        answers: [
            { text: "Explorar un lugar nuevo", type: "aventurero" },
            { text: "Ver una película clásica", type: "intelectual" },
            { text: "Hacer algo improvisado", type: "rebelde" },
            { text: "Una cita especial", type: "romantico" },
            { text: "Quedarme en casa", type: "introvertido" },
            { text: "Salir con mucha gente", type: "extrovertido" },
            { text: "Algo diferente y raro", type: "rarito" }
        ]
    },
    {
        text: "2. ¿Cómo te describen tus amigos?",
        answers: [
            { text: "Valiente", type: "aventurero" },
            { text: "Analítico", type: "intelectual" },
            { text: "Inconformista", type: "rebelde" },
            { text: "Sensible", type: "romantico" },
            { text: "Tranquilo", type: "introvertido" },
            { text: "Divertido", type: "extrovertido" },
            { text: "Excéntrico", type: "rarito" }
        ]
    },
    {
        text: "3. Elige un género de cine",
        answers: [
            { text: "Aventura", type: "aventurero" },
            { text: "Ciencia ficción", type: "intelectual" },
            { text: "Drama", type: "rebelde" },
            { text: "Romántico", type: "romantico" },
            { text: "Indie", type: "introvertido" },
            { text: "Comedia", type: "extrovertido" },
            { text: "Experimental", type: "rarito" }
        ]
    },
    {
        text: "4. ¿Qué valoras más en una película?",
        answers: [
            { text: "La acción", type: "aventurero" },
            { text: "El guión", type: "intelectual" },
            { text: "El mensaje", type: "rebelde" },
            { text: "La historia de amor", type: "romantico" },
            { text: "La atmósfera", type: "introvertido" },
            { text: "El ritmo", type: "extrovertido" },
            { text: "Lo inesperado", type: "rarito" }
        ]
    },
    {
        text: "5. ¿Qué personaje te atrae más?",
        answers: [
            { text: "Un héroe", type: "aventurero" },
            { text: "Un genio", type: "intelectual" },
            { text: "Un antihéroe", type: "rebelde" },
            { text: "Un enamorado", type: "romantico" },
            { text: "Un solitario", type: "introvertido" },
            { text: "Un líder carismático", type: "extrovertido" },
            { text: "Un personaje extraño", type: "rarito" }
        ]
    },
    {
        text: "6. ¿Cómo reaccionas ante lo desconocido?",
        answers: [
            { text: "Me lanzo sin miedo", type: "aventurero" },
            { text: "Lo analizo", type: "intelectual" },
            { text: "Lo cuestiono", type: "rebelde" },
            { text: "Me dejo llevar", type: "romantico" },
            { text: "Observo desde lejos", type: "introvertido" },
            { text: "Me entusiasmo", type: "extrovertido" },
            { text: "Me intriga", type: "rarito" }
        ]
    }
];

/*    GESTIÓN DE RESPUESTAS    */
/* Función que se ejecuta al pulsar una respuesta */
function answer(type) {

    /* Se suma un punto al perfil seleccionado */
    scores[type]++;

    /* Si quedan preguntas, se carga la siguiente */
    if (questionIndex < questions.length) {
        loadNextQuestion();
    } else {
        /* Si no, se muestra el resultado final */
        showResult();
    }
}
/*    CARGA DINÁMICA DE PREGUNTAS    */
function loadNextQuestion() {

    const quiz = document.getElementById("quiz");
    const q = questions[questionIndex];

    let html = `<div class="question"><p>${q.text}</p>`;

    q.answers.forEach(a => {
        html += `<button onclick="answer('${a.type}')">${a.text}</button>`;
    });

    html += `</div>`;

    quiz.innerHTML = html;
    questionIndex++;
}

/*    RESULTADOS DEL TEST    */
function showResult() {

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    /* Se obtiene el perfil con mayor puntuación */
    let result = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    /* TÍTULOS */
    const titles = {
        aventurero: "Eres un aventurero 🗡️",
        intelectual: "Eres un intelectual 🧠",
        rebelde: "Eres un rebelde ✊",
        romantico: "Eres un romántico 💖",
        introvertido: "Eres un introvertido 🌙",
        extrovertido: "Eres un extrovertido 🎉",
        rarito: "Eres un rarito 🌀"
    };

    /* DESCRIPCIONES */
    const descriptions = {
    aventurero:
        "Te identificas con personajes valientes que buscan emoción y riesgo. Eres Indiana Jones y Lara Croft.",
    intelectual:
        "Te atraen los personajes brillantes, analíticos y reflexivos. Eres Hercule Poirot y Liesel Meminger.",
    rebelde:
        "Conectas con personajes que desafían las normas establecidas y cuestionan el sistema. Eres Tyler Durden y Katniss Everdeen.",
    romantico:
        "Vives las historias desde la emoción y los sentimientos. Eres Fitzwilliam Darcy y Louisa Clark.",
    introvertido:
        "Te identificas con personajes tranquilos, observadores y profundos. Eres Theodore Twombly y Mathilda.",
    extrovertido:
        "Te reconoces en personajes carismáticos, sociables y llenos de energía. Eres Ferris Bueller y Elle Woods.",
    rarito:
        "Te encantan los personajes únicos, excéntricos y fuera de lo común. Eres Edward Scissorhands y Luna Lovegood."
};

    /* IMÁGENES */
    const images = {
        aventurero: ["../img/adivina/aventurero1.gif", "../img/adivina/aventurero2.gif"],
        intelectual: ["../img/adivina/intelectual1.gif", "../img/adivina/intelectual2.gif"],
        rebelde: ["../img/adivina/rebelde1.gif", "../img/adivina/rebelde2.gif"],
        romantico: ["../img/adivina/romantico1.gif", "../img/adivina/romantico2.gif"],
        introvertido: ["../img/adivina/introvertido1.gif", "../img/adivina/introvertido2.gif"],
        extrovertido: ["../img/adivina/extrovertido1.gif", "../img/adivina/extrovertido2.gif"],
        rarito: ["../img/adivina/rarito1.gif", "../img/adivina/rarito2.gif"]
    };

    /* ACTUALIZACIÓN DEL CONTENIDO */
    /* Texto */
    document.getElementById("result-title").innerText = titles[result];
    document.getElementById("result-text").innerText = descriptions[result];

    /* Imágenes */
    const img1 = document.getElementById("result-image-1");
    const img2 = document.getElementById("result-image-2");

    img1.src = images[result][0];
    img2.src = images[result][1];

    img1.alt = titles[result];
    img2.alt = titles[result];
}

/*    REINICIO DEL TEST    */
function restart() {

    /* Se reinician las puntuaciones */
    scores = {
        aventurero: 0,
        intelectual: 0,
        rebelde: 0,
        romantico: 0,
        introvertido: 0,
        extrovertido: 0,
        rarito: 0
    };

    /* Se reinicia el índice de preguntas */
    questionIndex = 0;

    /* Se recarga la página para empezar de nuevo */
    location.reload();
}

/*    INICIO DEL JUEGO    */
/* Cuando el DOM está cargado, se muestra la primera pregunta */
document.addEventListener("DOMContentLoaded", () => {
    loadNextQuestion();
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