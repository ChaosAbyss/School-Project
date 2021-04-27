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
  setTimeout(() => {
    infoBox.style.display = 'initial'
    startButton.style.display = 'initial'
  }, 300)
}

function startQuiz(popup, startButton) {
  startButton.addEventListener('click', () => {
    const quiz = document.getElementById('quiz')
    total = document.getElementById('total')
    popup.classList.remove('active')
    popup.style.visibility = 'hidden'
    popup.style.opacity = '0'
    setTimeout(() => {
      quiz.classList.add('active')
      quiz.style.visibility = 'visible'
      quiz.style.opacity = '1'
      showQuestions()
      total.innerHTML = questions_math.length
    }, 350)
    const checkButton = document.getElementById('check-button')
    checkButton.addEventListener('click', () => {
      checkAnswer()
    })
  })
}

function showQuestions() {
  const questionNumber = document.getElementById('task__number')
  const questionText = document.getElementById('task__text')
  const questionImage = document.getElementById('task__image')
  const questionQuestion = document.getElementById('task__question')
  const random = getRandomInt(55)
  let number = questions_math[random].number
  let text = questions_math[random].text
  let image = questions_math[random].image
  let question = questions_math[random].question
  questionNumber.innerHTML = number
  questionText.innerHTML = text
  questionImage.innerHTML = image
  questionQuestion.innerHTML = question
}

function checkAnswer() {
  const answer = questions_math[0].answer
  const input = document.getElementById('input')
  if (input.value == answer) {
    input.style.borderColor = '#5ef00a'
  } else {
    input.style.borderColor = '#f00a0a'
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
