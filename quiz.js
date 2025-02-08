const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Sri Lanka", correct: false },
      { text: "Nepal", correct: false },
    ],
  },
];

const questionElement = document.querySelector(".quiz h2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  nextButton.style.display = "none"; // Hide next button initially
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;

  answerButtons.innerHTML = ""; // Clear previous buttons

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(isCorrect) {
  if (isCorrect) {
    score++;
  }
  nextButton.style.display = "block"; // Show next button after selection
}

nextButton.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextButton.style.display = "none"; // Hide next button for new question
  } else {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButtons.innerHTML = "";
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block"; // Ensure restart button is visible
    nextButton.onclick = startQuiz; // Restart quiz on click
  }
};

startQuiz();
