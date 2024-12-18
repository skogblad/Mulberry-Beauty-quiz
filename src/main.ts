import "./style.scss";
import quizQuestions from "./questions.mts";
import { Question } from "./questions.mts";

// Variabel for questions
let currentQuestionIndex = 0;
let selectedQuestions: Question[] = [];

// Function for randomize questions
function selectRandomQuestions(): Question[] {
  const shuffled = quizQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}

// Function for display a question
function displayQuestion(): void {
  if (currentQuestionIndex >= selectedQuestions.length) {
    document.getElementById('nextQuestion')!.setAttribute('disabled', 'true');
    return;
  }
  
  const question = selectedQuestions[currentQuestionIndex];
  document.getElementById('questionTitle')!.textContent = `Fråga nr ${currentQuestionIndex + 1}`;
  document.getElementById('question')!.innerHTML = `
    ${question.question}
  `;
}

// Function for next question
function handleNextQuestion(): void {
  currentQuestionIndex++;
  displayQuestion();
}

//When start quiz is clicked the questions display
function startQuiz(): void {
    selectedQuestions = selectRandomQuestions();
    currentQuestionIndex = 0;

    displayQuestion();

    document.getElementById('nextQuestion')!.addEventListener('click', handleNextQuestion);
}
  
// When the page is loaded
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('startQuiz')!.addEventListener('click', startQuiz);
});