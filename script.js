

const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const scoreText = document.querySelector('#score');
const startBtn = document.querySelector('#start');
var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start");



let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let availableQuestions = [];

function hideStartScreen() {
    startScreenEl.setAttribute("class", "hide");
}


  
  
  


  

 
 const questionsArray = [


{
    id:1,
question: "What programming language is used for the interactivity of a website?",
options:["CSS","HTML","JavaScript", "Python",],
correct: "JavaScrpt", 
},
{
question: "What type of brackets are used to create an Array in JavaScript?",
Choice1: "()",
Choice2: "{}",
Choice3: "You don't need brackets",
Choice4: "[]",
answer: "[]",
},
{
question:"What is the correct symbol to create a Single Line Comment?",
Choice1: "//",
Choice2: "/*",
Choice3: "||",
Choice4: "&&",
answer: "//",

},
{
question:"What Function returns a random number from 0-1?",    
Choice1: "Random.Math",
Choice2: "Math (Random)",
Choice3: "Math, random",
Choice4: "Math.random()",
answer: "Math.random()",
},


]



//fixed items
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4


/// use a spread operator to get the values from the questions
startGame = () => {
  questionCounter = 0
  score = 0


};
// create new function called get new question store it to local storage

   
    
    //keeps count of questions and implements by 1 each time
    

    //calculates number of questions and keeps track of what question user is on. 
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
   
//
    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]

    });

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']
    })

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect'

    if(classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
    };

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
    }, 1000)

    });

    incrementScore = num => {
        score +=num
        setCounterText.innerText = score
    };
    
   
    

    // Attach event listener to start button to call startGame function on click
    startButton.addEventListener("click", startGame);
   



  
    