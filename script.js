// const quizInfo = [
//     {
//         question: "What are the data types supported by JavaScript?",
//         a: "boolean, null, string, symbol",
//         b: "Flex-box, array, variable, integers",
//         c: "symbol, object, number, margin",
//         d: "python, java, html, css ",
//         correct: "a",
//     },
//     {
//         question: "What does CSS stand for?",
//         a: "Cascading Style Ship",
//         b: "Cats Slip Slide",
//         c: "Cascading Style Sheet",
//         d: "None of the above",
//         correct: "c",
//     },
//     {
//         question: "What does HTML stand for?",
//         a: "Hyper Tom Moves LOgs",
//         b: "Hyper Text Markup Language",
//         c: "Home Tool Markup Language",
//         d: "Hyper and Text Markup Language",
//         correct: "b",
//     },

//     {
//         question: "How can you  make a numbered list?",
//         a: "<ul>",
//         b: "<li>",
//         c: "<dl>",
//         d: "<ol>",
//         correct: "d"
//     }

// ];

// const quiz = document.getElementById("quiz")
// const answerEl = document.querySelector(".answer")
// const questionEl = document.getElementById("question")
// const a_text = document.getElementById("a_text")
// const b_text = document.getElementById("b_text")
// const c_text = document.getElementById("c_text")
// const d_text = document.getElementById("d_text")
// const submit = document.getElementById("submit")
// const startBtn = document.querySelector(".startBtn")
// const startScreen = document.getElementById("start-screen")




// var thisQuiz = 0;
// let score = 0;


// function startQuiz() {
//     // unselectAnswers()
//     quiz.removeAttribute("hidden");
//     //startScreen.classList.add("hide");

//     // let thisQuizData = quizInfo[thisQuiz]

//     // questionEl.innerText = thisQuizData.question
//     // a_text.innerText = thisQuizData.a
//     // b_text.innerText = thisQuizData.b
//     // c_text.innerText = thisQuizData.c
//     // d_text.innerText = thisQuizData.d
// }


// startBtn.addEventListener("click", startQuiz());
// function unselectAnswers() {
//     answerEl.forEach(answerEl => answerEl.checked= false)
// }

// function selectedAnswer() {
//     let answer 

//     answerEl.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//     }
//     return answer;
// });
// }

// submit.addEventListener('click', () => {
//     const answer = selectedAnswer()

//     if(answer) {
//         if(answer === quizInfo(thisQuiz).correct) {
//             score++
//         }

//         thisQuiz++

//         if(thisQuiz < quizInfo.length) {
//             startQuiz()
//         } else {
//             quiz.innerHTML = `
//             <h2>Your answer ${score}/${quizInfor.length} questions correctly </h2>
//             `
//         }
// }
// }) 
