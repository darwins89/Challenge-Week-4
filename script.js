

var CG = document.querySelector(".CG");

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".begin-button");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var option1 = document.getElementById("op1");
var option2 = document.getElementById("op2");
var option3 = document.getElementById("op3");
var option4 = document.getElementById("op4");
var qButton = document.querySelector(".questions");

var newQuestion = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var result = document.getElementsByClassName("result");
    result[0].innerText = "";


var questions = [
    {
        id: 0,
        qs: "What does HTML stand for?",
        a: [{ text: "something random", isCorrect: false },
        { text: "something random", isCorrect: false },
        { text: " HyperText Markup Language", isCorrect: true },
        ]
    }, {
        id: 1,
        qs: "What does CSS stand for?",
        a: [{ text: " Cascading Style Sheet", isCorrect: true },
        { text: "something random", isCorrect: false },
        { text: " HyperText Markup Language", isCorrect: false },
        ]
    }, {
        id: 2,
        qs: "What does JS stand for?",
        a: [{ text: " Cascading Style Sheet", isCorrect: false },
        { text: "Java Script", isCorrect: true },
        { text: " HyperText Markup Language", isCorrect: false },
        ]
    }
];




startButton.addEventListener("click", startGame);

function startGame() {
    isWin = false;
    timerCount = 5;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer();
    // renderQuestion();
}




function loseGame() {
    CG.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}


function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}








