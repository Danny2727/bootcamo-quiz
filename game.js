const question = document.getElementById('question');
const answerChoice = Array.from(document.getElementsByClassName('answer-text'));

let currentQuestion = {};
let answer = true;
let score = 0;
let quesitonCount = 0;
let remainingQuestions = [];

let questions = [
    {
        question: "What are the data types supported by JavaScript?",
        answer1: "boolean, null, string, symbol",
        answer2: "Flex-box, array, variable, integers",
        answer3: "symbol, object, number, margin",
        answer4: "python, java, html, css ",
        answer: 1
    },
    {
        question: "What does CSS stand for?",
        answer1: "Cascading Style Ship",
        answer2: "Cats Slip Slide",
        answer3: "Cascading Style Sheet",
        answer4: "None of the above",
        answer: 3
    },
    {
        question: "What does HTML stand for?",
        answer1: "Hyper Tom Moves LOgs",
        answer2: "Hyper Text Markup Language",
        ansewr3: "Home Tool Markup Language",
        answer4: "Hyper and Text Markup Language",
        answer: 2
    },

    {
        question: "How can you  make a numbered list?",
        answer1: "<ul>",
        answer2: "<li>",
        answer3: "<dl>",
        answer4: "<ol>",
        answer: 4
    }

];

// Constants

const correct = 10;
const questionMax = 4;

startGame = () => {
    questionCount = 0;
    score = 0;
    remainingQuestions = [... questions];
    getNewQuestion();
};

getNewQuestion = () => {

    questionCount++;
    const questionIndex = Math.floor(Math.random() * remainingQuestions.length);  
    currentQuestion = remainingQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    answerChoice.forEach( answerChoice => {
        const number = answerChoice.dataset['number'];
        answerChoice.innerText = currentQuestion['answerChoice' + number];
    });

    remainingQuestions.splice(questionIndex, 1);
};


startGame();


