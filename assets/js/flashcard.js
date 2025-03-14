import questions from './questions.js';

// flashcard.js
import {
  getElement,
  showElement,
  hideElement,
  setText,
  createAnswerButton,
  lockAnswers,
  markCorrectAnswer,
  createResumeFlashcard,
} from './dom.js';


console.log('Quiz JS loaded...');

let currentQuestionIndex = 0;
let score = 0;

let userResponses = [];

// DOM Elements
const introScreen = getElement('#intro-screen');
const questionScreen = getElement('#question-screen');
const resultScreen = getElement('#result-screen');

const hintText = document.getElementById('hint');

const questionText = getElement('#question-text');
const answersDiv = getElement('#answers');
const nextBtn = getElement('#next-btn');
const startBtn = getElement('#start-btn');
const restartBtn = getElement('#restart-btn');

const scoreText = getElement('#score-text');


const currentQuestionIndexSpan = getElement('#current-question-index');
const totalQuestionsSpan = getElement('#total-questions');

const audioDisplay = getElement('#audio');
const gameResume = getElement('#user-responses');

// Init
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);



let questionCount = 0;

function startQuiz() {
  hideElement(introScreen);
  showElement(questionScreen);
  
  //Nombres aléatoires
  for (let i = 0; i < questions.length; i++) {
    let randomNumber = Math.floor(Math.random() * questions.length);
    currentQuestionIndex = randomNumber;
  }

  questionCount = 0; 
  score = 0;

  setText(totalQuestionsSpan, questions.length);

  showQuestion();



}

function showQuestion() {


    

  const q = questions[currentQuestionIndex];
  setText(questionText, q.text);
  setText(currentQuestionIndexSpan, questionCount + 1);
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


}

function selectAnswer(index, btn) {

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
  hintText.classList.add("hidden");
  if (questionCount >= questions.length) {
    endQuiz(); 
    return;
  }
  questionCount++; 
  let randomNumber = Math.floor(Math.random() * questions.length);
  currentQuestionIndex = randomNumber;

  showQuestion();
}

function endQuiz() {
  hideElement(questionScreen);
  showElement(resultScreen);
  

 
  questions.forEach((question, i) => {
    createResumeFlashcard(
      gameResume,
      question.text,
      userResponses[i],
      question.answers[question.correct]
    );
  });


}


function restartQuiz() {
  hideElement(resultScreen);
  showElement(introScreen);

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

// //ajout du mode Flashcard
// const flashcard = document.getElementById('flashcard')
// flashcard.addEventListener('click', () => {
//   let gamemode = 1;
// });
