import "./style.scss";
import quizQuestions, { IQuestion } from "./questions.mts";

// Variabel for questions
let currentQuestionIndex = 0;
let selectedQuestions: IQuestion[] = [];
const usedQuestions: Set<IQuestion> = new Set();

// Function for randomize questions
function selectRandomQuestions(): IQuestion[] {
    const availableQuestions = quizQuestions.filter((q) => !usedQuestions.has(q));
  
    // If the user played two times the quiz starts over
    if (availableQuestions.length < 10) {
      usedQuestions.clear(); 
      availableQuestions.push(...quizQuestions);
    }
  
    const shuffled = availableQuestions.sort(() => Math.random() - 0.5);
    const questions = shuffled.slice(0, 10);
  
    questions.forEach((q) => usedQuestions.add(q)); 
    return questions;
}

// Function for display a question
function displayQuestion(): void {
  if (currentQuestionIndex >= selectedQuestions.length) {
    document.getElementById("nextQuestion")!.setAttribute("disabled", "true");
    return;
  }
  
  const question = selectedQuestions[currentQuestionIndex];
  document.getElementById("questionTitle")!.textContent = `Fråga nr ${currentQuestionIndex + 1}`;
  document.getElementById("question")!.innerHTML = `
    ${question.question}
  `;
}

// Function for next question
function handleNextQuestion(): void {
  currentQuestionIndex++;
  displayQuestion();
}

// When start quiz is clicked the questions display
function startQuiz(): void {
    selectedQuestions = selectRandomQuestions();
    currentQuestionIndex = 0;

    displayQuestion();

    document.getElementById("nextQuestion")!.addEventListener("click", handleNextQuestion);
}

// Start over the quiz
function handlePlayAgain(): void {
    document.getElementById("nextQuestion")!.removeAttribute("disabled");
    startQuiz();
}
  
// When the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    const startQuizButton = document.getElementById("startQuiz");
    const playAgainButton = document.getElementById("playAgain");
  
    // If the buttons exist, add event listener
    if (startQuizButton) {
      startQuizButton.addEventListener("click", startQuiz);
    }
  
    if (playAgainButton) {
      playAgainButton.addEventListener("click", handlePlayAgain);
    }
});