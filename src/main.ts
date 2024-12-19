import "./style.scss";
import quizQuestions from "./questions.mts";

console.log(quizQuestions);

// Starta quiz-knappen
const startQuizBtn: any = document.getElementById("startQuiz");

startQuizBtn.addEventListener("click", startQuiz);


const welcomeSection: any = document.getElementById("welcome");
const questionsSection: any = document.getElementById("questions");

// Gömmer startsidan och visar frågesidan
function startQuiz() { 
  welcomeSection.classList.add("hidden");
  questionsSection.classList.remove("hidden");
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

console.log(updatePoints());
