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

