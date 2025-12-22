document.addEventListener("DOMContentLoaded", () => {
    let score = 0;
    let currentQuestionIndex = 0;

    const questions = [
        { text: "¿Dónde se tiran las botellas de vino?", options: ["Papel", "Vidrio"], correct: "Vidrio" },
        { text: "¿Dónde se tira un envase de leche?", options: ["Orgánico", "Plástico"], correct: "Plástico" },
        { text: "¿Dónde se tira una cáscara de huevo?", options: ["Orgánico", "Vidrio"], correct: "Orgánico" },
        { text: "¿Dónde se tira una lata de refresco?", options: ["Plástico", "Vidrio"], correct: "Plástico" },
        { text: "¿Dónde se tiran las hojas secas de los árboles?", options: ["Órganico", "Vidrio"], correct: "Órganico" }
       


    ];

    const scoreElement = document.getElementById("score");
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option");
    const startButton = document.getElementById("start-game");

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = score;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.text;
    optionButtons[0].textContent = currentQuestion.options[0];
    optionButtons[1].textContent = currentQuestion.options[1];

    optionButtons[0].onclick = () => checkAnswer(currentQuestion.options[0]);
    optionButtons[1].onclick = () => checkAnswer(currentQuestion.options[1]);
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
        score++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. Intenta de nuevo.");
    }
    scoreElement.textContent = score;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("¡Juego terminado! Puntuación final: " + score);
    }
}

    startButton.addEventListener("click", startGame);
});