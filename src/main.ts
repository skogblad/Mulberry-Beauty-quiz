import "./style.scss";
import quizQuestions from "./questions.mts";

console.log(quizQuestions);

// Variables for quiz and timer
let questionIndex = 0;
const totalQuestions = 10;
let timerElement: any = document.getElementById("timer");
let timerInterval: any;
let elapsedTime: number = 0;
let isTimerRunning: boolean = false;

// Start quiz button
const startQuizBtn: any = document.getElementById("startQuiz");
const endQuizBtn: any = document.getElementById("endQuiz");
const playAgainBtn: any = document.getElementById("playAgain");

startQuizBtn.addEventListener("click", startQuiz);
endQuizBtn.addEventListener("click", endQuiz);
playAgainBtn.addEventListener("click", playAgain);


const welcomeSection: any = document.getElementById("welcome");
const questionsSection: any = document.getElementById("questions");
const scoreboardSection: any = document.getElementById("scoreboard");

// Hide welcome page and show the quiz page
function startQuiz() { 

  startTimer();

  welcomeSection.classList.add("hidden");
  questionsSection.classList.remove("hidden");

  displayQuestion(questionIndex);
}

// Timer functions
function startTimer() {
  if (isTimerRunning) 
    return; 
  
  timerInterval = setInterval(() => {
    elapsedTime++;
    timerElement.textContent = `Tid: ${elapsedTime}s`; 
  }, 1000);

  isTimerRunning = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  elapsedTime = 0;
  timerElement.textContent = `Tid: 0s`;
}

// Display next question
function displayQuestion(index: number) {
  const question = quizQuestions[index]; 
  document.getElementById("questionTitle")!.textContent = `Fråga ${index + 1}`;

  const questionContainer = document.getElementById("questionContainer")!;
  questionContainer.innerHTML = ''; 

  question.answers.forEach((answer: string) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => handleAnswer(question.correctAnswer, answer);
    questionContainer.appendChild(button);
  });

  // Show "End Quiz" button on the last question
  if (index === totalQuestions - 1) {
    endQuizBtn.classList.remove("hidden");
  }
}

// Handle user answer
function handleAnswer(correctAnswer: string, userAnswer: string) {
  if (userAnswer === correctAnswer) {
    console.log("Rätt svar!");
  } else {
    console.log("Fel svar!");
  }

  questionIndex++;

  if (questionIndex === totalQuestions) {
    endQuiz(); 
  } else {
    displayQuestion(questionIndex);
  }
}

// End of the quiz and show results
function endQuiz() {
  stopTimer();

// Show scoreboard and hide quiz page
questionsSection.classList.add("hidden");
scoreboardSection.classList.remove("hidden");

  console.log("Quiz slut!");
}

// Start over the quiz
function playAgain() {
  resetTimer();
  questionIndex = 0;

// Show welcome page and hide scoreboard
scoreboardSection.classList.add("hidden");
welcomeSection.classList.remove("hidden");


}