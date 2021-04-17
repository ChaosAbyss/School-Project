// Task grid
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.popupTarget)
    openPopup(popup)
  })
})

closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup')
    closePopup(popup)
  })
})

function openPopup(popup) {
  if (popup == null) return
  popup.classList.add('active')
  overlay.classList.add('active')
  const startButton = document.getElementById('start-button') 
  startTask(startButton)
}

function closePopup(popup) {
  if (popup == null) return
  popup.classList.remove('active')
  overlay.classList.remove('active')
  const finishButton = document.getElementById('finish-button') 
  finishTask(finishButton)
}

function reply_click(clicked_id) {
  title = document.getElementById("popup__title")
  title.innerHTML = clicked_id + " задание"
}

function startTask(startButton) {
  startButton.addEventListener('click', () => {
    const infoBox = document.getElementById('info__box')
    infoBox.style.display = 'none'
  })
}

function finishTask(finishButton) {
  finishButton.addEventListener('click', () => {
    const infoBox = document.getElementById('info__box')
    infoBox.style.display = 'initial'
  })
}