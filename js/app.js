// Basic popup
const openPopupButtons = document.querySelectorAll("[data-popup-target]");
const closePopupButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

// Math quiz contents
const taskDescription = document.getElementById("task__description");
const taskImage = document.getElementById("task__image");
const taskQuestion = document.getElementById("task__question");

// Russian quiz contents
const taskRead = document.getElementById("task__read");
const taskText = document.getElementById("task__text");
const taskOptions = document.getElementById("task__options");
const taskWrite = document.getElementById("task__write");

const answer = document.getElementById("answer");
const taskCounter = document.getElementById("task__counter");
const total = document.getElementById("total");
const input = document.getElementById("input");
const checkButton = document.getElementById("check-button");

// Open a quiz from grid
openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quiz = document.querySelector(button.dataset.popupTarget);
    startQuiz(quiz);
  });
});

// Close a quiz via close button
closePopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quiz = button.closest(".popup");
    finishQuiz(quiz);
  });
});

function startQuiz(quiz) {
  quiz.classList.add("active");
  overlay.classList.add("active");
  quiz.style.visibility = "visible";
  quiz.style.opacity = "1";
  showTasks();
}

function finishQuiz(quiz) {
  if (quiz == null) return;
  quiz.style.visibility = "hidden";
  quiz.style.opacity = "0";
  quiz.classList.remove("active");
  overlay.classList.remove("active");
  setTimeout(() => {
    input.value = "";
    input.classList.remove("right") | input.classList.remove("wrong");
  }, 300);
}

function replyClick(clicked_id) {
  const quizTitle = document.getElementById("quiz__title");
  quizTitle.innerHTML = clicked_id + " задание";
}

function getId(clicked_id) {
  globalThis.currentTask = clicked_id;
}

function showTasks() {
  if (document.getElementsByClassName("open-button").length == 19) {
    var names = [
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
    ];
    let random = getRandomInt(names[currentTask - 1].length);
    var description = names[currentTask - 1][random].text;
    var image = names[currentTask - 1][random].image;
    var question = names[currentTask - 1][random].question;

    if (description !== undefined) {
      taskDescription.classList.remove("inactive");
      taskDescription.innerHTML = description;
    }
    if (image !== undefined) {
      taskImage.classList.remove("inactive");
      taskImage.innerHTML = image;
    }
    if (question !== undefined) {
      taskQuestion.classList.remove("inactive");
      taskQuestion.innerHTML = question;
    }
    answer.classList.remove("inactive");
    input.classList.remove("inactive");
    checkButton.classList.remove("inactive");
    taskCounter.classList.remove("inactive");
    total.innerHTML = names[currentTask - 1].length;

    checkAnswer(names, currentTask, random);
  }

  if (document.getElementsByClassName("open-button").length == 27) {
    var names = [
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
      thirteenth,
      fourteenth,
      fifteenth,
      sixteenth,
      seventeenth,
      eighteenth,
      nineteenth,
      twentieth,
      twenty_first,
      twenty_second,
      twenty_third,
      twenty_fourth,
      twenty_fifth,
      twenty_sixth,
      // twenty_seventh
    ];
    let random = getRandomInt(names[currentTask - 1].length);
    var read = names[currentTask - 1][random].read;
    var text = names[currentTask - 1][random].text;
    var text_22 = names[21][random].text;
    var question = names[currentTask - 1][random].question;
    var options = names[currentTask - 1][random].options;
    var write = names[currentTask - 1][random].write;

    taskText.addEventListener("click", () => {
      if (taskText.classList.contains("partial")) {
        taskText.classList.remove("partial");
        taskText.classList.add("full");
        return;
      }
      if (taskText.classList.contains("full")) {
        taskText.classList.remove("full");
        taskText.classList.add("partial");
        return;
      }
    });

    if (read !== undefined) {
      taskRead.classList.remove("inactive");
      taskRead.innerHTML = read;
    }
    if (text !== undefined && 22 < currentTask) {
      taskText.classList.remove("inactive");
      taskText.innerHTML = text_22;
    }
    if (text !== undefined && 22 >= currentTask) {
      taskText.classList.remove("inactive");
      taskText.innerHTML = text;
    }
    if (question !== undefined) {
      taskQuestion.classList.remove("inactive");
      taskQuestion.innerHTML = question;
    }
    if (options !== undefined) {
      taskOptions.classList.remove("inactive");
      taskOptions.innerHTML = options;
    }
    if (write !== undefined) {
      taskWrite.classList.remove("inactive");
      taskWrite.innerHTML = write;
    }
    answer.classList.remove("inactive");
    input.classList.remove("inactive");
    checkButton.classList.remove("inactive");
    taskCounter.classList.remove("inactive");
    total.innerHTML = names[currentTask - 1].length;

    checkAnswer(names, currentTask, random);
  }
}

function checkAnswer(names, currentTask, random) {
  checkButton.addEventListener("click", () => {
    if (
      input.value !== "" &&
      document.getElementsByClassName("open-button").length == 19
    ) {
      var realAnswer = names[currentTask - 1][random].answer;
      if (input.value == realAnswer) {
        input.className = "";
        input.classList.add("right");
      } else {
        input.className = "";
        input.classList.add("wrong");
      }
    }
    if (
      input.value !== "" &&
      document.getElementsByClassName("open-button").length == 27
    ) {
      var realAnswers = names[currentTask - 1][random].answer;
      if (realAnswers.some((i) => i == input.value)) {
        input.className = "";
        input.classList.add("right");
      } else {
        input.className = "";
        input.classList.add("wrong");
      }
    }
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
