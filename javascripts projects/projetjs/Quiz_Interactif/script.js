const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    answers: ["Paris", "Londres", "Rome", "Madrid"],
    correct: "Paris"
  },
  {
    question: "Quel langage est utilisé pour le style web ?",
    answers: ["HTML", "CSS", "Python", "Java"],
    correct: "CSS"
  },
  {
    question: "Quel est le résultat de 3 + 5 ?",
    answers: ["5", "8", "10", "15"],
    correct: "8"
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const submitBtn = document.getElementById("submit");
const progressEl = document.querySelector(".progress");

function loadQuestion() {
  const q = questions[index];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="answer" value="${answer}" />
        ${answer}
      </label>`;
    answersEl.appendChild(li);
  });

  updateProgress();
}

function getSelected() {
  const radios = document.querySelectorAll("input[name='answer']");
  for (let radio of radios) {
    if (radio.checked) return radio.value;
  }
  return null;
}

function updateProgress() {
  const pourcentage = ((index) / questions.length) * 100;
  progressEl.style.width = pourcentage + "%";
}

submitBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (!selected) return;

  if (selected === questions[index].correct) {
    score++;
  }

  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    quiz.innerHTML = `<h2>Vous avez eu ${score}/${questions.length} bonnes réponses !</h2>`;
    progressEl.style.width = "100%";
    submitBtn.style.display = "none";
  }
});

loadQuestion();
