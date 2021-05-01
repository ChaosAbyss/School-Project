// Necessary elements
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// Grid elements
openPopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.popupTarget)
    openPopup(popup)
  })
})

// Popup close button
closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup')
    closePopup(popup)
  })
})

// Change popup title
function replyClick(clicked_id) {
  popupTitle = document.getElementById('popup__title')
  quizTitle = document.getElementById('quiz__title')
  popupTitle.innerHTML = clicked_id + ' задание'
  quizTitle.innerHTML = clicked_id + ' задание'
}

function getId(clicked_id) {
  globalThis.currentTask = clicked_id
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
  globalThis.currentName = names[clicked_id - 1]
}

function openPopup(popup) {
  if (popup == null) return
  popup.style.visibility = 'visible'
  popup.style.opacity = '1'
  popup.classList.add('active')
  overlay.classList.add('active')
  const startButton = document.getElementById('start-button')
  startQuiz(popup, startButton)
}

function closePopup(popup) {
  if (popup == null) return
  popup.style.visibility = 'hidden'
  popup.style.opacity = '0'
  popup.classList.remove('active')
  overlay.classList.remove('active')
  const infoBox = document.getElementById('info__box')
  const startButton = document.getElementById('start-button')
  const input = document.getElementById('input')
  setTimeout(() => {
    infoBox.style.display = 'initial'
    startButton.style.display = 'initial'
    input.value = ''
    input.classList.remove('right') | input.classList.remove('wrong')
  }, 300)
}

function startQuiz(popup, startButton) {
  startButton.addEventListener('click', () => {
    const quiz = document.getElementById('quiz')
    popup.classList.remove('active')
    popup.style.visibility = 'hidden'
    popup.style.opacity = '0'
    setTimeout(() => {
      quiz.classList.add('active')
      quiz.style.visibility = 'visible'
      quiz.style.opacity = '1'
      showTasks()
    }, 350)
    const checkButton = document.getElementById('check-button')
    const input = document.getElementById('input')
    checkButton.addEventListener('click', () => {
      if (input.value !== '') {
        checkAnswer()
      }
    })
  })
}

function showTasks() {
  const taskText = document.getElementById('task__text')
  const taskImage = document.getElementById('task__image')
  const taskQuestion = document.getElementById('task__question')
  const answer = document.getElementById('answer')
  const input = document.getElementById('input')
  const checkButton = document.getElementById('check-button')
  const taskCounter = document.getElementById('task__counter')
  const total = document.getElementById('total')
  const random = getRandomInt(55)
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
  const answer = currentName.answer
  const input = document.getElementById('input')
  if (input.value == answer) {
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
