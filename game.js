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
        answer: "boolean, null, string, symbol"
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Cascading Style Ship",
            "Cats Slip Slide",
            "Cascading Style Sheet",
            "None of the above",
        ],
        answer: "Cascading Style Sheet"
    },
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Tom Moves Logs",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper and Text Markup Language",
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "How can you  make a numbered list?",
        answers: [
            "<ul>",
            "<li>",
            "<dl>",
            "<ol>",
        ],
        answer: "<ol>"
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

    if(remainingQuestions.length === 0 || quesitonCount > questionMax) {
        return window.location.assign("/end.html");
    }

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
    // console.log(answerChoice);
    // console.log(event.currentTarget)
    var answer;
    if (answerChoice.matches(".answer-choice")) {
        answer = answerChoice.lastElementChild.textContent;
    } else if (answerChoice.matches(".answer-text")) {
        answer = answerChoice.textContent;

    }
    console.log(currentQuestion.answer);
    if (answer === currentQuestion.answer) {
        console.log("right anwser")
    } else {
        console.log("wrong answer")
    }
    
    getNewQuestion();

}

var answerContainer = document.querySelector('#game');

answerContainer.onclick = answerChecker;


startGame();


