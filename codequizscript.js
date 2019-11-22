const buttonEl = document.querySelector("button");
const startContainerEl = document.getElementById("start-container");
const gameContainerEl = document.getElementById("game-container");
const myQuestions = [{
    question: "Commonly used data types DO NOT include:",
    answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
    },
    correctAnswer: "c"
},
{
    question: "The condition in an if / else statement is enclosed within ____.",
    answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parentheses",
        d: "square brackets"
    },
    correctAnswer: "c"
}
];

if (gameContainerEl.style.display === "none") {
    gameContainerEl.style.display = "block";
} else {
    gameContainerEl.style.display = "none";
}


function startGame() {
    if (gameContainerEl.style.display === "none") {
        gameContainerEl.style.display = "block";
    } else {
        gameContainerEl.style.display = "none";
    }
    // buttonEl.setAttribute("class", "btn btn-success btn-lg");
    // startContainerEl.setAttribute("class", "container");
    // gameContainerEl.setAttribute("class", "container d-none");
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    var insertZero = n => n < 10 ? "0" + n : "" + n,
        displayTime = n => n ? time.textContent = insertZero(~~(n / 3600) % 3600) + ":" +
            insertZero(~~(n / 60) % 60) + ":" +
            insertZero(n % 60)
            : time.textContent = "IGNITION..!",
        countDownFrom = n => (displayTime(n), setTimeout(_ => n ? sid = countDownFrom(--n)
            : displayTime(n), 1000)),
        sid;
    countDownFrom(3610);
    setTimeout(_ => clearTimeout(sid), 20005);
}

buttonEl.addEventListener("click", startGame);
    
    
    // function initGame() {
       

    //     buttonEl.setAttribute("class", "btn btn-secondary btn-lg");

    
        
    // }

  

    
