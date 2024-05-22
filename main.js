const input = document.querySelectorAll("input");
const error = document.querySelectorAll(".error");
const submitBtn = document.getElementById("submit-button");
const form = document.getElementById("form");
const checkBox = document.getElementById("checkbox-input");
const radioBtns = document.querySelectorAll(".input-radio");
let textValid = false;
let radioValid = false;
let emailValid = false;
let checkBoxValid = false;

function handleSubmit(e) {
  e.preventDefault();
}

form.addEventListener("submit", handleSubmit);

submitBtn.addEventListener("click", () => {
  validateEmail();
  validateTextInputs();
  validateRadioBtns();
  validateCheckBox();
  validateForm();
});

function validateTextInputs() {
  const textInputs = document.querySelectorAll(".input-text");
  textInputs.forEach((i) => {
    const errorText = i.nextElementSibling;
    if (i.value === "") {
      errorText.classList.add("error-text-active");
    } else {
      errorText.classList.remove("error-text-active");
      textValid = true;
    }
  });
}

function validateRadioBtns() {
  const errorRadioBtns = document.getElementById("radio-error");
  radioBtns.forEach((r) => {
    if (r.checked) {
      radioValid = true;
      errorRadioBtns.classList.add("error-text-active");
    }
  });
  if (radioValid === false) {
    errorRadioBtns.classList.add("error-text-active");
  } else {
    errorRadioBtns.classList.remove("error-text-active");
  }
}

function validateEmail() {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailInput = document.getElementById("email-input");
  const errorEmail = emailInput.nextElementSibling;
  if (emailInput.value === "") {
    errorEmail.classList.add("error-text-active");
  } else if (emailInput.value.match(regEx)) {
    errorEmail.classList.remove("error-text-active");
    emailValid = true;
  } else {
    errorEmail.classList.add("error-text-active");
  }
}

function validateCheckBox() {
  const checkBoxError = checkBox.nextElementSibling;
  if (checkBox.checked === false) {
    checkBoxError.classList.add("error-text-active");
  } else {
    checkBoxError.classList.remove("error-text-active");
    checkBoxValid = true;
  }
}

function validateForm() {
  if (
    textValid === true &&
    emailValid === true &&
    radioValid == true &&
    checkBoxValid === true
  ) {
    const textArea = document.getElementById("text-area");
    const dialog = document.getElementById("dialog");
    dialog.classList.add("dialog-active");
    textArea.value = "";
    input.forEach((i) => {
      i.value = "";
    });
    radioBtns.forEach((r) => {
      r.checked = false;
    });
    checkBox.checked = false;
  }
}
