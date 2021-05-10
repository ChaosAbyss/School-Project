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
const done = document.getElementById("done");
const input = document.getElementById("input");
const checkButton = document.getElementById("check-button");
var doneNum = 1;

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
  var names_math = [
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

  var names_rus = [
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
  ];

  if (document.getElementsByClassName("open-button").length == 19) {
    var sequence = shuffle(
      Array.from(Array(names_math[currentTask - 1].length).keys())
    );
    console.log(sequence);
    showTasks(sequence, names_math);
  }
  if (document.getElementsByClassName("open-button").length == 27) {
    var sequence = shuffle(
      Array.from(Array(names_rus[currentTask - 1].length).keys())
    );
    console.log(sequence);
    showTasks(sequence, names_rus);
  }
}

function finishQuiz(quiz) {
  if (quiz == null) return;
  quiz.style.visibility = "hidden";
  quiz.style.opacity = "0";
  quiz.classList.remove("active");
  overlay.classList.remove("active");
  setTimeout(() => {
    input.value = "";
    input.classList.remove("right") || input.classList.remove("wrong");
    if (document.getElementsByClassName("open-button").length == 19) {
      taskDescription.classList.add("inactive");
      taskImage.classList.add("inactive");
      taskQuestion.classList.add("inactive");
    }
    if (document.getElementsByClassName("open-button").length == 27) {
      taskRead.classList.add("inactive");
      taskText.classList.add("inactive");
      taskQuestion.classList.add("inactive");
      taskOptions.classList.add("inactive");
      taskWrite.classList.add("inactive");
    }
    if (
      document.getElementsByClassName("open-button").length == 27 &&
      currentTask >= 22
    ) {
      taskText.classList.remove("partial") || taskText.classList.remove("full");
      taskText.classList.remove("collapse");
      taskText.removeEventListener("click", switchMode);
    }
  }, 300);
}

function showTasks(sequence, names) {
  if (document.getElementsByClassName("open-button").length == 19) {
    var description = names[currentTask - 1][sequence[doneNum - 1]].text;
    var image = names[currentTask - 1][sequence[doneNum - 1]].image;
    var question = names[currentTask - 1][sequence[doneNum - 1]].question;

    if (description !== "") {
      taskDescription.classList.remove("inactive");
      taskDescription.innerHTML = description;
    }
    if (image !== "") {
      taskImage.classList.remove("inactive");
      taskImage.innerHTML = image;
    }
    if (question !== "") {
      taskQuestion.classList.remove("inactive");
      taskQuestion.innerHTML = question;
    }
    answer.classList.remove("inactive");
    input.classList.remove("inactive");
    checkButton.classList.remove("inactive");
    taskCounter.classList.remove("inactive");
    total.innerHTML = names[currentTask - 1].length;
    done.innerHTML = doneNum;

    checkAnswer(names, currentTask, sequence);
  }

  if (document.getElementsByClassName("open-button").length == 27) {
    var read = names[currentTask - 1][sequence[doneNum - 1]].read;
    var text = names[currentTask - 1][sequence[doneNum - 1]].text;
    var text_22 = names[21][sequence[doneNum - 1]].text;
    var question = names[currentTask - 1][sequence[doneNum - 1]].question;
    var options = names[currentTask - 1][sequence[doneNum - 1]].options;
    var write = names[currentTask - 1][sequence[doneNum - 1]].write;
    if (currentTask >= 22) {
      taskText.classList.add("collapse", "partial");
      taskText.addEventListener("click", switchMode);
    }
    console.log(names[currentTask - 1][sequence[doneNum - 1]].answer);

    if (read !== "") {
      taskRead.classList.remove("inactive");
      taskRead.innerHTML = read;
    }
    if (text !== "" && currentTask < 22) {
      taskText.classList.remove("inactive");
      taskText.innerHTML = text;
    }
    if (currentTask >= 22) {
      taskText.classList.remove("inactive");
      taskText.innerHTML = text_22;
    }
    if (question !== "") {
      taskQuestion.classList.remove("inactive");
      taskQuestion.innerHTML = question;
    }
    if (options !== "") {
      taskOptions.classList.remove("inactive");
      taskOptions.innerHTML = options;
    }
    if (write !== "") {
      taskWrite.classList.remove("inactive");
      taskWrite.innerHTML = write;
    }
    answer.classList.remove("inactive");
    input.classList.remove("inactive");
    checkButton.classList.remove("inactive");
    taskCounter.classList.remove("inactive");
    total.innerHTML = names[currentTask - 1].length;
    done.innerHTML = doneNum;

    checkAnswer(names, currentTask, sequence);
  }
}

function nextTask(sequence, names) {
  input.value = "";
  input.classList.remove("right") || input.classList.remove("wrong");
  if (document.getElementsByClassName("open-button").length == 19) {
    taskDescription.style.opacity = "0";
    taskImage.style.opacity = "0";
    taskQuestion.style.opacity = "0";
    answer.style.opacity = "0";
    taskCounter.style.opacity = "0";
  }
  if (document.getElementsByClassName("open-button").length == 27) {
    taskRead.style.opacity = "0";
    taskText.style.opacity = "0";
    taskQuestion.style.opacity = "0";
    taskOptions.style.opacity = "0";
    taskWrite.style.opacity = "0";
    answer.style.opacity = "0";
    taskCounter.style.opacity = "0";
    taskText.classList.remove("full");
    taskText.removeEventListener("click", switchMode);
  }

  setTimeout(() => {
    console.log(sequence);
    showTasks(sequence, names);
    if (document.getElementsByClassName("open-button").length == 19) {
      taskDescription.style.opacity = "1";
      taskImage.style.opacity = "1";
      taskQuestion.style.opacity = "1";
      answer.style.opacity = "1";
      taskCounter.style.opacity = "1";
    }
    if (document.getElementsByClassName("open-button").length == 27) {
      taskRead.style.opacity = "1";
      taskText.style.opacity = "1";
      taskQuestion.style.opacity = "1";
      taskOptions.style.opacity = "1";
      taskWrite.style.opacity = "1";
      answer.style.opacity = "1";
      taskCounter.style.opacity = "1";
    }
  }, 300);
}

function checkAnswer(names, currentTask, sequence) {
  checkButton.addEventListener("click", () => {
    if (
      input.value !== "" &&
      document.getElementsByClassName("open-button").length == 19
    ) {
      var realAnswer = names[currentTask - 1][sequence[doneNum - 1]].answer;
      if (input.value == realAnswer) {
        input.className = "";
        input.classList.add("right");
        doneNum += 1;
        setTimeout(() => {
          nextTask(sequence, names);
        }, 800);
      } else {
        input.className = "";
        input.classList.add("wrong");
      }
    }
    if (
      input.value !== "" &&
      document.getElementsByClassName("open-button").length == 27
    ) {
      var realAnswers = names[currentTask - 1][sequence[doneNum - 1]].answer;
      if (realAnswers.some((i) => i == input.value)) {
        input.className = "";
        input.classList.add("right");
        doneNum += 1;
        setTimeout(() => {
          nextTask(sequence, names);
        }, 800);
      } else {
        input.className = "";
        input.classList.add("wrong");
      }
    }
  });
}

function switchMode() {
  if (taskText.classList.contains("partial")) {
    taskText.classList.remove("partial");
    taskText.classList.add("full");
    return;
  } else {
    taskText.classList.remove("full");
    taskText.classList.add("partial");
    return;
  }
}

function replyClick(clicked_id) {
  const quizTitle = document.getElementById("quiz__title");
  quizTitle.innerHTML = clicked_id + " задание";
}

function getId(clicked_id) {
  globalThis.currentTask = clicked_id;
}

function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
