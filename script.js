var clickBtn = document.getElementById('click');
var firstContainer = document.getElementById('first')
var timeRemaining = document.querySelector('.time')
var quiz = document.querySelector('.quiz')

var timer;
var timeLeft = 45;
var userAnswer = true;


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

var qI = 0
var score = 0
var btnContainer
//Starts the game 
function start() {
    startTime()
    displayQuestion()
    // hide my click button after i append the element to the page
    clickBtn.classList.add('hide')
}

// Displays the Current question in index
function displayQuestion() {
    firstContainer.innerHTML = ''
    var h1El = document.createElement('h1')
    btnContainer = document.createElement('div')
    // add
    console.log(questions[qI])
    h1El.textContent = questions[qI].question
    // append

    // take array and create multiple buttons at one time
    for (i = 0; i < questions[qI].answers.length; i++) {
        // create
        var btn = document.createElement('button')

        // add
        btn.textContent = questions[qI].answers[i]

        btn.addEventListener('click', click)

        // append
        btnContainer.append(btn)
    }

    if (qI === questions.length) {
        endQuiz();
    }

    firstContainer.append(h1El, btnContainer)

}

// Starts the time 
function startTime() {
    timer = setInterval(function () {
        timeLeft--;
        timeRemaining.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz()
        }
    }, 1000);
}

// Checks the users input for right or wrong answer
function click(e) {
    let userInput = e.target.textContent;
    // get the answer for current the question  
    console.log(userInput)
    // penalizes user for the wrong input
    console.log(qI)
    if (questions[qI].answer !== e.target.textContent) {
        timeLeft -= 5;
    } else {
        score++
    }

    //Updates to the next quesiton once user as seleceted a answer
    qI++
    if (qI <= questions.length - 1) {
        displayQuestion()
    } else {
        endQuiz();
    }


}

function endQuiz() {
    console.log('quiz ended')
    btnContainer.classList.add('hide')
    quiz.classList.add('hide')
    highScore()
}

function highScore() {
    // Created text for highscores screen
    var h2El = document.createElement('h2')
    submitBtn = document.createElement('button')
    var scores = document.createElement('p')
    scores.innerText = `${score}/4`;

    // Added the text for the created elements 
    submitBtn.innerText = 'submit'
    h2El.textContent = "High Scores"

    //Styled the input box 
    userName = document.createElement('input')
    userName.id = 'name-input'
    userName.maxLength = 200;
    userName.cols = 10;
    userName.rows = 1;

    // Appended the created elements to the body
    document.body.append(h2El)
    document.body.append(userName)
    document.body.append(scores)
    document.body.append(submitBtn)

    localStorage.setItem('score', score)

    userName.addEventListener('change', function () {
        var nameInput = document.getElementById('name-input')
        var nameValue = nameInput.value
        localStorage.setItem('name', nameValue)
    })

}

clickBtn.addEventListener('click', start)




