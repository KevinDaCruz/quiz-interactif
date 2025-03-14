import questions from './questions.js';

// quiz.js
import {
  getElement,
  showElement,
  hideElement,
  setText,
  createAnswerButton,
  updateScoreDisplay,
  lockAnswers,
  markCorrectAnswer,
  createResume,
} from './dom.js';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
  startTimer,
} from './utils.js';

console.log('Quiz JS loaded...');

let currentQuestionIndex = 0;
let score = 0;
let bestScore = loadFromLocalStorage('bestScore', 0);
let timerId = null;
let userResponses = [];

// DOM Elements
const introScreen = getElement('#intro-screen');
const questionScreen = getElement('#question-screen');
const resultScreen = getElement('#result-screen');

const bestScoreValue = getElement('#best-score-value');
const bestScoreEnd = getElement('#best-score-end');
const hintText = document.getElementById('hint');

const questionText = getElement('#question-text');
const answersDiv = getElement('#answers');
const nextBtn = getElement('#next-btn');
const startBtn = getElement('#start-btn');
const restartBtn = getElement('#restart-btn');

const scoreText = getElement('#score-text');
const timeLeftSpan = getElement('#time-left');

const currentQuestionIndexSpan = getElement('#current-question-index');
const totalQuestionsSpan = getElement('#total-questions');

const audioDisplay = getElement('#audio');
const gameResume = getElement('#user-responses');

// Init
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

setText(bestScoreValue, bestScore);

function startQuiz() {
  hideElement(introScreen);
  showElement(questionScreen);

  currentQuestionIndex = 0;
  score = 0;

  setText(totalQuestionsSpan, questions.length);

  showQuestion();
}

function showQuestion() {
  clearInterval(timerId);

  const q = questions[currentQuestionIndex];
  setText(questionText, q.text);
  setText(currentQuestionIndexSpan, currentQuestionIndex + 1);
  setText(hintText, q.hint);

  answersDiv.innerHTML = '';
  q.answers.forEach((answer, index) => {
    const btn = createAnswerButton(answer, () => selectAnswer(index, btn));
    answersDiv.appendChild(btn);
  });

  nextBtn.classList.add('hidden');
  if (currentQuestionIndex > 15) {
    hideElement(audioDisplay);
  }
  audioDisplay.src = `../assets/audio/${currentQuestionIndex}.mp3`;

  timeLeftSpan.textContent = q.timeLimit;
  timerId = startTimer(
    q.timeLimit,
    (timeLeft) => setText(timeLeftSpan, timeLeft),
    () => {
      lockAnswers(answersDiv);
      nextBtn.classList.remove('hidden');
    }
  );
}

function selectAnswer(index, btn) {
  clearInterval(timerId);
  userResponses.push(btn.innerText);
  console.log(btn.innerText, userResponses);

  const q = questions[currentQuestionIndex];
  if (index === q.correct) {
    score++;
    btn.classList.add('correct');
  } else {
    btn.classList.add('wrong');
  }

  markCorrectAnswer(answersDiv, q.correct);
  lockAnswers(answersDiv);
  nextBtn.classList.remove('hidden');
}

function nextQuestion() {
  hintText.classList.add('hidden');
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  hideElement(questionScreen);
  showElement(resultScreen);
  updateScoreDisplay(scoreText, score, questions.length);

  questions.forEach((question, i) => {
    createResume(
      gameResume,
      question.text,
      userResponses[i],
      question.answers[question.correct]
    );
  });

  if (score > bestScore) {
    bestScore = score;
    saveToLocalStorage('bestScore', bestScore);
  }
  setText(bestScoreEnd, bestScore);
}

function restartQuiz() {
  hideElement(resultScreen);
  showElement(introScreen);
  setText(bestScoreValue, bestScore);
  gameResume.innerHTML = '';
  userResponses = [];
}

hintBtn.addEventListener('click', () => {
  if (hintText.classList.contains('hidden')) {
    hintText.classList.remove('hidden');
  } else {
    hintText.classList.add('hidden');
  }
});

// Ajout du dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
