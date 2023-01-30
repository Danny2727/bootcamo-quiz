const question = document.getElementById('question');
const answerChoice = Array.from(document.getElementsByClassName('answer-text'));

let currentQuestion = {};
let answer = false;
let score = 0;
let quesitonCount = 0;
let remainingQuestions = [];

let questions = [
    {
        question: "What are the data types supported by JavaScript?",
        answers: [
            "boolean, null, string, symbol",
            "flex-box, array, variable, integers",
            "symbol, object, number, margin",
            "python, java, html, css ",
        ],
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Cascading Style Ship",
            "Cats Slip Slide",
            "Cascading Style Sheet",
            "None of the above",
        ],
        answer: 3
    },
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Tom Moves Logs",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper and Text Markup Language",
        ],
        answer: 2
    },

    {
        question: "How can you  make a numbered list?",
        answers: [
            "<ul>",
            "<li>",
            "<dl>",
            "<ol>",
        ],
        answer: 4
    }

];

// Constants

const correct = 10;
const questionMax = 4;

startGame = () => {
    questionCount = 0;
    score = 0;
    remainingQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    questionCount++;
    const questionIndex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[questionIndex];
    question.innerText = currentQuestion.question;

     for (let i = 0; i < 4; i++) {
         var answerEl = document.getElementById(`answer-${[i]}`);
        answerEl.textContent = currentQuestion.answers[i];
    }

    // answerChoice.forEach(answerChoice => {
    //     const number = answerChoice.dataset['number'];
    //     answerChoice.innerText = currentQuestion['answerChoice' + number];
    // });

    remainingQuestions.splice(questionIndex, 1);

};

function answerChecker(event) {
    var answerChoice = event.target

    if (!answerChoice.matches(".answer-choice")) {
        console.log("not a answer")
        return;
    }

    if (answerChoice.value !== "target your answer here") {
        console.log("wrong answer")
    } else {
        console.log("right answer")
    }

}

var answerContainer = document.querySelector('.container');

answerContainer.onclick = answerChecker;


startGame();


