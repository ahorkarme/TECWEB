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


/*    MINIJUEGO: ¿QUÉ PERSONAJE DE FICCIÓN ERES?    */

let scores = {
    aventurero: 0,
    intelectual: 0,
    rebelde: 0
};

let questionIndex = 0;

const questions = [
    {
        text: "2. ¿Cómo te describen tus amigos?",
        answers: [
            { text: "Valiente", type: "aventurero" },
            { text: "Inteligente", type: "intelectual" },
            { text: "Inconformista", type: "rebelde" }
        ]
    },
    {
        text: "3. Elige un género de cine",
        answers: [
            { text: "Aventuras", type: "aventurero" },
            { text: "Ciencia ficción", type: "intelectual" },
            { text: "Drama", type: "rebelde" }
        ]
    }
];

function answer(type) {
    scores[type]++;

    if (questionIndex < questions.length) {
        loadNextQuestion();
    } else {
        showResult();
    }
}

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

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    let result = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    const titles = {
        aventurero: "Eres un aventurero 🗡️",
        intelectual: "Eres un intelectual 🧠",
        rebelde: "Eres un rebelde ✊"
    };

    const descriptions = {
        aventurero: "Te identificas con personajes como Indiana Jones o Lara Croft.",
        intelectual: "Te pareces al famoso personaje Sherlock Holmes.",
        rebelde: "Encajas con personajes como Tyler Durden o V de Vendetta."
    };

    document.getElementById("result-title").innerText = titles[result];
    document.getElementById("result-text").innerText = descriptions[result];
}

function restart() {
    scores = { aventurero: 0, intelectual: 0, rebelde: 0 };
    questionIndex = 0;
    location.reload();
}
