//----------------------- scrollBtn -----------------------

var scrollBtn = document.getElementById("bottomBtn");
var scrollNav = document.getElementById("scrollNav");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 250) {
    scrollBtn.style.display = "block";
    scrollNav.style.position = "sticky";
  } else {
    scrollBtn.style.display = "none";

    scrollNav.style.position = "block";
  }
});

//----------------------- scrollBtn -----------------------

//----------------------- countersDiv -----------------------

var countersDiv = document.getElementById("iconsNum");
var counterStarted = false;

window.addEventListener("scroll", function () {
  if (
    window.innerHeight - countersDiv.offsetHeight / 1.2 >=
      countersDiv.getBoundingClientRect().top &&
    counterStarted == false
  ) {
    counterStarted = true;
    var counters = document.querySelectorAll(".count");
    var speed = 80;

    counters.forEach(function (counter) {
      function updateCount() {
        var targetNum = +counter.getAttribute("data-target");
        var startNum = +counter.innerText;
        var speedNum = targetNum / speed;

        console.log(targetNum);
        if (startNum < targetNum) {
          counter.innerText = startNum + speedNum;
          setTimeout(updateCount, 8);
        } else {
          startNum.innerText = targetNum;
        }
      }
      updateCount();
    });
  }
});

//----------------------- countersDiv -----------------------

//----------------------- form -----------------------

var form = document.getElementById("myForm");
form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "userName":
      checkName(e.target);
      break;
    case "userEmail":
      checkEmail(e.target);
      break;
    case "userPassword":
      checkPassword(e.target);
      break;
    case "userMessage":
      checkMessage(e.target);
      break;
  }
});

function showError(userInput, messege) {
  userInput.nextElementSibling.innerText = messege;
  userInput.nextElementSibling.classList.add("text-danger");
}

function removeError(userInput) {
  userInput.nextElementSibling.innerText = "";
}

function checkName(nameInput) {
  var inputText = nameInput.value.trim();
  if (inputText.length >= 3) removeError(nameInput);
  else showError(nameInput, "enter at least 3 characters");
}

function checkEmail(emailInput) {
  var emailText = emailInput.value;
  var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegEx.test(emailText)) removeError(emailInput);
  else showError(emailInput, "enter valid Email");
}

function checkPassword(passInput) {
  var passText = passInput.value;
  var passRegExp = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (passRegExp.test(passText)) removeError(passInput);
  else
    showError(
      passInput,
      "enter at least 1 lowrcase, 1 capitalcase, 1 special character and be 8 characters"
    );
}

function checkMessage(messageInput) {
  var inputText = messageInput.value.trim();
  if (inputText.length >= 2) removeError(messageInput);
  else showError(messageInput, "enter your message");
}

//----------------------- form -----------------------

//----------------------- regBtn -----------------------

document.getElementById("regBtn").addEventListener("click", function (event) {
  var nameInput = document.getElementById("userName");
  var emailInput = document.getElementById("userEmail");
  var passInput = document.getElementById("userPassword");
  var messageInput = document.getElementById("userMessage");

  var inputText = nameInput.value.trim();
  var emailText = emailInput.value;
  var passText = passInput.value;
  var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passRegExp = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (
    inputText.length >= 3 &&
    emailRegEx.test(emailText) &&
    passRegExp.test(passText)
  ) {
    console.log("good");
  } else {
    console.log("bad");
    event.preventDefault();
    checkName(nameInput);
    checkEmail(emailInput);
    checkPassword(passInput);
    checkName(messageInput);
  }
});

//----------------------- regBtn -----------------------
