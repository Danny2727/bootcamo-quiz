var clickBtn = document.getElementById('click');
var firstContainer = document.getElementById('first')
var timeRemaining = document.querySelector('.time')

var timer;
var timeLeft = 5;


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

function start() {
    firstContainer.innerHTML = ''
    // create
    var h1El = document.createElement('h1')
    var btnContainer = document.createElement('div')
    // add
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
    firstContainer.append(h1El, btnContainer)

    startTime()

    // hide my click button after i append the element to the page
    clickBtn.classList.add('hide')
}

function startTime() {
    timer = setInterval(function() {
        timeLeft--;
        timeRemaining.textContent = timeLeft;
        if (timerLeft === 0) {
            clearInterval(timer);
            
        }
    }, 1000);
}




function click() {
    qI++

    if (qI === questions.length) {

    } else {
        start()
    }
}

clickBtn.addEventListener('click', start)