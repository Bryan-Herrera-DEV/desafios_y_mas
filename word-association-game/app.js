const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('questions-display');

const questionns = [
  {
    quiz: ['value', 'estimate', 'evaluate'], // these are the three reference words
    option: ['jury', 'assess'], // the user has to decide which of these two words is the most accurate, or both.
    correct: 2 // this is corect option
  },
  {
    quiz: ['closes', 'near', 'next'], // these are the three reference words
    option: ['forecast', 'adjacent'], // the user has to decide which of these two words is the most accurate, or both.
    correct: 1 // this is corect option
  },
  {
    quiz: ['foreign', 'national', 'ethnic'],
    option: ['mad', 'exotic'],
    correct: 2,
  },
  {
    quiz: ['assume', 'insight', 'weather'],
    option: ['forecast', 'sustainable'],
    correct: 1,
  },
  {
    quiz: ['fast', 'quick', 'prompt'],
    option: ['charity', 'rapid'],
    correct: 2,
  },
];
let clicked = [];
let score = 0;
scoreDisplay.textContent = score;

function populateQuestions() {
  questionns.forEach(question => {
    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');

    const logoDisplay = document.createElement("h1")
    logoDisplay.textContent = "👨‍💻"
    questionBox.append(logoDisplay)

    question.quiz.forEach(tip => {
      const textBox = document.createElement('p')
      textBox.classList.add('text-tip')
      textBox.textContent = tip
      questionBox.append(textBox)
    })

    const questionButtons = document.createElement('div');
    questionButtons.classList.add('questions-buttons');
    questionBox.append(questionButtons);

    question.option.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button');
      questionButton.classList.add('question-button');
      questionButton.textContent = option;

      questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex + 1, question.correct))

      questionButtons.append(questionButton)
    })
    const answerDisplay = document.createElement('div');
    answerDisplay.classList.add('answer-display');

    questionBox.append(answerDisplay)
    questionDisplay.append(questionBox)
  })
}

populateQuestions();
function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
  console.log(option, optionIndex)

  if (optionIndex === correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    addResult(questionBox, 'Correct!', 'correct')
  } else if (score === 0) {
    scoreDisplay.textContent = score;
    addResult(questionBox, 'Wrong!', 'wrong')
  } else {
    score--;
    scoreDisplay.textContent = score;
    addResult(questionBox, 'Wrong!', 'wrong')
  }
  clicked.push(option);
  console.log(questionButton)
  questionButton.disabled = clicked.includes(option);
}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector('.answer-display')
  answerDisplay.classList.remove('wrong')
  answerDisplay.classList.remove('correct')
  answerDisplay.classList.add(className)
  answerDisplay.textContent = answer
}
