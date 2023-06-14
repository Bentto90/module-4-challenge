const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: false },
        ]
    },
    {
        question: "What is 2 + 3?",
        answers: [
            { text: "4", correct: false },
            { text: "22", correct: false },
            { text: "5", correct: true },
            { text: "8", correct: false },
        ]
    },
    {
        question: "What is 2 + 4?",
        answers: [
            { text: "4", correct: false },
            { text: "22", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false },
        ]
    },

    {
        question: "What is 2 + 5?",
        answers: [
            { text: "4", correct: false },
            { text: "22", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
        ]
    }

];

const questionElement = document.getElementById("quiz-body")
const answerButton = document.getElementById("quiz-btn")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion();

};

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
};

startQuiz();

 