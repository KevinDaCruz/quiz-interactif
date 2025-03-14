// dom.js
export const getElement = (selector) => document.querySelector(selector);
export const showElement = (element) => (element.style.display = 'block');
export const hideElement = (element) => (element.style.display = 'none');
export const setText = (element, text) => (element.textContent = text);

export const createAnswerButton = (text, onClick) => {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.addEventListener('click', onClick);
  return btn;
};

export const updateScoreDisplay = (scoreElement, score, total) => {
  scoreElement.textContent = `Votre score : ${score} / ${total}`;
};

export const lockAnswers = (container) => {
  const buttons = container.querySelectorAll('button');
  buttons.forEach((btn) => (btn.disabled = true));
};

export const markCorrectAnswer = (container, correctIndex) => {
  const buttons = container.querySelectorAll('button');
  if (buttons[correctIndex]) {
    buttons[correctIndex].classList.add('correct');
  }
};

export const createResume = (
  container,
  question,
  userResponse,
  goodResponse
) => {
  const li = document.createElement('li');
  li.classList.add('user-response');
  li.innerHTML = `<p>${question} <span class="rep ${
    userResponse === goodResponse ? 'correct' : 'wrong'
  }">${userResponse}</span></p>`;
  container.appendChild(li);
};

export const audioPlay = (audio, audioButton) => {
  audioButton.addEventListener('click', () => audio.play());
};
export const createResumeFlashcard = (
  question,
  userResponse,
  goodResponse
) => {
  const li = document.createElement('li');
  li.classList.add('user-response');
  li.innerHTML = `<p>${question} <span class="rep ${
    userResponse === goodResponse ? 'correct' : 'wrong'
  }">${userResponse}</span></p>`;
};
