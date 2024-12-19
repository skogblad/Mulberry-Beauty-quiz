import "./style.scss";
import quizQuestions, { IQuestion } from "./questions.mts";

// Starta quiz-knappen
const startQuizBtn: any = document.getElementById("startQuiz");

startQuizBtn.addEventListener("click", startQuiz);


const welcomeSection: any = document.getElementById("welcome");
const questionsSection: any = document.getElementById("questions");

// Gömmer startsidan och visar frågesidan
function startQuiz() { 
  welcomeSection.classList.add("hidden");
  questionsSection.classList.remove("hidden");
  
  selectedQuestions = selectRandomQuestions();
    currentQuestionIndex = 0;

    displayQuestion();

    document.getElementById("nextQuestion")!.addEventListener("click", handleNextQuestion);
}

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

  // Show the answer for the question as well
  displayQuizAnswers();
}

// Function for next question
function handleNextQuestion(): void {
  currentQuestionIndex++;
  displayQuestion();
  displayQuizAnswers();
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

// ----- TO DO: -----
// Scss: Lägg till style för rätt/fel

const answersContainer = document.getElementById("answers") as HTMLElement;
const nextQuestionBtn = document.getElementById("nextQuestionBtn") as HTMLElement;

// Show the answers for the quiz questions
function displayQuizAnswers() {
  answersContainer.innerHTML = "";

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  currentQuestion.answers.forEach((answer, index) => {
    answersContainer.innerHTML += `
      <label>
        <input type="radio" name="quizAnswer" value="${answer}" id="answer${index}">
        <span>${answer}</span>
      </label>
    `;
  })
 
  const radioButtons = document.querySelectorAll(`input[name="quizAnswer"]`);

  // Add an event for each radioBtn when pressing it
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
      const correctAnswer = currentQuestion.correctAnswer;

      // Resets the markings on all answers and to the default color
      document.querySelectorAll("label").forEach((label) => {
        label.style.color = "initial";
      });

      // Mark which options are correct/incorrect and adds color
      radioButtons.forEach((button) => {
        const answerValue = (button as HTMLInputElement).value;

        if (answerValue === correctAnswer) {
          button.parentElement!.style.color = "green";
        } else {
          button.parentElement!.style.color = "red";
        }
      });

      // Show "Nästa fråga"-btn
      nextQuestionBtn.hidden = false;
      
    });
  });
}

let points: number = 0;

// Function to update the points
function updatePoints(): void {
  // Get the radio buttons shown on the page
  const radioBtns: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type='radio']");
  
  // Add an event listener for each radio button and link it to the function "checkAnswers"
  radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener("click", () => checkAnswer(radioBtn));
  });

  // Get the "play again" button and reset points on click if it exists
  const playAgainBtn: HTMLButtonElement | null = document.getElementById("playAgain") as HTMLButtonElement | null;
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", resetPoints);
  }
}

// Function to check if the selected radio button is the correct answer
function checkAnswer(selectedRadioBtn: HTMLInputElement): void {
  if (selectedRadioBtn.id === "correctAnswer") {
    points++;
  }
}

// Function to reset the points to 0
function resetPoints(): void {
  points = 0;
}
