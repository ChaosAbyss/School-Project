// Basic popup
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// Quiz contents
const taskText = document.getElementById('task__text')
const taskImage = document.getElementById('task__image')
const taskQuestion = document.getElementById('task__question')
const answer = document.getElementById('answer')
const taskCounter = document.getElementById('task__counter')
const total = document.getElementById('total')
const input = document.getElementById('input')
const checkButton = document.getElementById('check-button')
const random = getRandomInt(55)

// Open a quiz from grid
openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const quiz = document.querySelector(button.dataset.popupTarget)
    startQuiz(quiz)
  })
})

// Close a quiz via close button
closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const quiz = button.closest('.popup')
    finishQuiz(quiz)
  })
})

function startQuiz(popup) {
  quiz.classList.add('active')
  overlay.classList.add('active')
  quiz.style.visibility = 'visible'
  quiz.style.opacity = '1'
  showTasks()
  checkButton.addEventListener('click', () => {
    if (input.value !== '') {
      checkAnswer()
    }
  })
}

function finishQuiz(quiz) {
  if (quiz == null) return
  quiz.style.visibility = 'hidden'
  quiz.style.opacity = '0'
  quiz.classList.remove('active')
  overlay.classList.remove('active')
  setTimeout(() => {
    input.value = ''
    input.classList.remove('right') | input.classList.remove('wrong')
  }, 300)
}

function replyClick(clicked_id) {
  const quizTitle = document.getElementById('quiz__title')
  quizTitle.innerHTML = clicked_id + ' задание'
}

function getId(clicked_id) {
  const names = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelfth,
    // thirteenth,
    // fourteenth,
    // fifteenth,
    // sixteenth,
    // seventeenth,
    // eighteenth,
    // nineteenth,
  ]
  globalThis.currentTask = clicked_id
  globalThis.currentName = names[clicked_id - 1]
}

function showTasks() {
  try {
    let text = currentName[random].text
    let image = currentName[random].image
    let question = currentName[random].question

    if (text !== undefined) {
      taskText.classList.remove('inactive')
      taskText.innerHTML = text
    }
    if (image !== undefined) {
      taskImage.classList.remove('inactive')
      taskImage.innerHTML = image
    }
    if (image !== undefined) {
      taskQuestion.classList.remove('inactive')
      taskQuestion.innerHTML = question
    }
    answer.classList.remove('inactive')
    input.classList.remove('inactive')
    checkButton.classList.remove('inactive')
    taskCounter.classList.remove('inactive')
    total.innerHTML = currentName.length
  } catch {
    taskText.classList.remove('inactive')
    taskText.innerHTML = 'Такого задания пока нет'
    taskImage.classList.add('inactive')
    taskQuestion.classList.add('inactive')
    answer.classList.add('inactive')
    input.classList.add('inactive')
    checkButton.classList.add('inactive')
    taskCounter.classList.add('inactive')
  }
}

function checkAnswer() {
  const realAnswer = currentName.answer
  if (input.value == realAnswer) {
    input.className = ''
    input.classList.add('right')
  } else {
    input.className = ''
    input.classList.add('wrong')
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
