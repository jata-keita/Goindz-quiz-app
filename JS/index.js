const quizData = [
  {
    question: "which kind of company is Gomindz",
    a: "A web development company",
    b: "A data science company",
    c: "A graphic company",
    d: "A networking company",
    correct: "b",
  },
  {
    question:
      "Who is the CEO of Gomiz?",
    a: "Konteh",
    b: "Musai",
    c: "sheihk tijan",
    d: "Ebrima jallow",
    correct: "b",
  },
  {
    question: "Who is the head of the marketing  department in Gomindz ?",
    a: "Salieu jallow",
    b: "korka jallow",
    c: "ML kit",
    d: "Fatou Bajie",
    correct: "b",
  },
  {
    question: "Who is the head of graphics in Gomindz?",
    a: "Ebrima  konteh",
    b: "Ml kits",
    c: "salieu jallow",
    d: "fatima bajie",
    correct: "a",
  },
  {
    question: "Who is the magnet in Gominz?",
    a: "sheihk tijan",
    b: "salieu jallow",
    c: "ebrima jallow",
    d: "sheihk tijan",
    correct: "b",
  },
  {
    question: "Who is the baller of Gominz?",
    a: "sheihk tijan",
    b: "salieu jallow",
    c: "ebrima jallow",
    d: "sheihk tijan",
    correct: "c",
  },
  {
    question: "Who is the naibul imam of  Gominz?",
    a: "sheihk tijan",
    b: "salieu jallow",
    c: "ebrima konteh",
    d: "sheihk tijan",
    correct: "a",
  },
  {
    question: "Who is the  feminist of  Gominz?",
    a: "sheihk tijan",
    b: "Fatima Bajie",
    c: "ebrima konteh",
    d: "Awa konteh",
    correct: "d",
  },

  {
    question: "Who who is the first woman javascript developer in Gominz?",
    a: "sheihk tijan",
    b: "Fatima Bajie",
    c: "ebrima konteh",
    d: "Awa konteh",
    correct: "b",
  },

  {
    question: "Who is name after marchine learning at Gominz?",
    a: "Modou lamin jange",
    b: "Fatima Bajie",
    c: "ebrima konteh",
    d: "Awa konteh",
    correct: "a",
  },


];

const questionEl = document.querySelector("#question");
const quiz = document.querySelector("#quiz");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.textContent = currentQuizData.question;
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
}

loadQuiz();

function ansSelected() {
  const answerEls = document.querySelectorAll(".answer");

  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  const answerEls = document.querySelectorAll(".answer");

  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", function () {
  const answer = ansSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> Ths is what you know anout ${score}/${quizData.length} Gomindz 🎉</h2>
      <button onclick="location.reload()">Replay.</button>`;
    }
  }
});
