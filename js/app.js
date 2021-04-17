// Necessary elements
const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// Grid elements
openPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.querySelector(button.dataset.popupTarget)
    openPopup(popup)
  })
})

// Popup close button
closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup')
    closePopup(popup)
  })
})

// Change popup title
function reply_click(clicked_id) {
  title = document.getElementById("popup__title")
  title.innerHTML = clicked_id + " задание"
}

function openPopup(popup) {
  if (popup == null) return
  popup.classList.add('active')
  overlay.classList.add('active')
  const startButton = document.getElementById('start-button') 
  const finishButton = document.getElementById('finish-button') 
  startTask(startButton)
  finishTask(finishButton)
}

function closePopup(popup) {
  if (popup == null) return
  popup.classList.remove('active')
  overlay.classList.remove('active')
  const infoBox = document.getElementById('info__box')
  setTimeout(() => { infoBox.style.display = 'initial'; }, 300);
}

function startTask(startButton) {
  startButton.addEventListener('click', () => {
    const infoBox = document.getElementById('info__box')
    infoBox.style.display = 'none'
  })
}

function finishTask(finishButton) {
  const infoBox = document.getElementById('info__box')
  finishButton.addEventListener('click', () => {
    infoBox.style.display = 'initial'
  })
}