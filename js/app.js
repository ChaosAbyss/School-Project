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

function openPopup(popup) {
  if (popup == null) return
  popup.style.visibility = 'visible'
  popup.style.opacity = '1'
  popup.classList.add('active')
  overlay.classList.add('active')
  const startButton = document.getElementById('start-button')
  startTask(popup, startButton)
}

function closePopup(popup) {
  if (popup == null) return
  popup.style.visibility = 'hidden'
  popup.style.opacity = '0'
  popup.classList.remove('active')
  overlay.classList.remove('active')
  const infoBox = document.getElementById('info__box')
  const startButton = document.getElementById('start-button')
  setTimeout(() => {
    infoBox.style.display = 'initial'
    startButton.style.display = 'initial'
  }, 300)
}

function startTask(popup, startButton) {
  startButton.addEventListener('click', () => {
    const quiz = document.getElementById('quiz')
    const finishButton = document.getElementById('finish-button')
    popup.classList.remove('active')
    popup.style.visibility = 'hidden'
    popup.style.opacity = '0'
    setTimeout(() => {
      quiz.classList.add('active')
      quiz.style.visibility = 'visible'
      quiz.style.opacity = '1'
      showQuestions()
    }, 350)
    finishTask(quiz, finishButton)
  })
}

function finishTask(quiz, finishButton) {
  if (finishButton == null) return
  finishButton.addEventListener('click', () => {
    quiz.classList.remove('active')
    quiz.style.visibility = 'hidden'
    quiz.style.opacity = '0'
    overlay.classList.remove('active')
  })
}

function showQuestions() {
  const questionNumber = document.getElementById('task__number')
  const questionText = document.getElementById('task__text')
  const questionImage = document.getElementById('task__image')
  const questionQuestion = document.getElementById('task__question')
  let title = questions_math[0].number
  let text = questions_math[0].task
  let image = questions_math[0].image
  let question = questions_math[0].question
  questionNumber.innerHTML = number
  questionText.innerHTML = text
  questionImage.innerHTML = image
  questionQuestion.innerHTML = question
}
