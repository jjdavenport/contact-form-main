const textInputs = document.querySelectorAll(".input-text");
const radioBtns = document.querySelectorAll(".input-radio");
const button = document.querySelectorAll(".radio-button");
const error = document.querySelectorAll(".error");
const submitBtn = document.getElementById("submit-button");
const form = document.getElementById("form");
const checkBox = document.getElementById("checkbox-input");
const emailInput = document.getElementById("email-input");
let textValid = false;
let emailValid = false;
let radioValid = false;
let checkBoxValid = false;

function handleSubmit(e) {
  e.preventDefault();
}

form.addEventListener("submit", handleSubmit);

submitBtn.addEventListener("click", () => {
  validateTextInputs();
  validateEmail();
  validateRadioBtns();
  validateCheckBox();
  validateForm();
});

function validateTextInputs() {
  const textInputs = document.querySelectorAll(".input-text");
  textInputs.forEach((i) => {
    textValid = false;
    const errorText = i.nextElementSibling;
    if (i.value === "") {
      console.log("empty");
      errorText.classList.add("error-text-active");
      i.classList.add("error-input");
    } else {
      errorText.classList.remove("error-text-active");
      i.classList.remove("error-input");
      textValid = true;
    }
  });
}

textInputs.forEach((i) => {
  const errorText = i.nextElementSibling;
  i.addEventListener("input", () => {
    if (i.value) {
      i.classList.remove("error-input");
      errorText.classList.remove("error-text-active");
    }
  });
});

function validateRadioBtns() {
  const errorRadioBtns = document.getElementById("radio-error");
  radioValid = false;
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
  emailValid = false;
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errorEmail = emailInput.nextElementSibling;
  if (emailInput.value === "") {
    errorEmail.classList.add("error-text-active");
    emailInput.classList.add("error-input");
  } else if (emailInput.value.match(regEx)) {
    errorEmail.classList.remove("error-text-active");
    emailInput.classList.remove("error-input");
    emailValid = true;
  } else {
    errorEmail.classList.add("error-text-active");
    emailInput.classList.add("error-input");
  }
}

emailInput.addEventListener("input", () => {
  const errorEmail = emailInput.nextElementSibling;
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailInput.value.match(regEx)) {
    emailInput.classList.remove("error-input");
    errorEmail.classList.remove("error-text-active");
  }
});

function validateCheckBox() {
  checkBoxValid = false;
  const checkBoxError = document.getElementById("checkbox-error");
  if (checkBox.checked === false) {
    checkBoxError.classList.add("error-text-active");
  } else {
    checkBoxError.classList.remove("error-text-active");
    checkBoxValid = true;
  }
}

checkBox.addEventListener("input", () => {
  const checkBoxError = document.getElementById("checkbox-error");
  if (checkBox.checked) {
    checkBoxError.classList.remove("error-text-active");
  }
});

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
    emailInput.value = "";
    textArea.value = "";
    textInputs.forEach((i) => {
      i.value = "";
    });
    radioBtns.forEach((r) => {
      r.checked = false;
    });
    button.forEach((b) => b.classList.remove("button-active"));
    checkBox.checked = false;
  }
}

function linkBtns() {
  const removeError = document.getElementById("radio-error");
  button.forEach((btn) => {
    btn.addEventListener("click", () => {
      button.forEach((b) => b.classList.remove("button-active"));
      removeError.classList.remove("error-text-active");
      btn.classList.add("button-active");
      const radioBtn = btn.querySelector(".input-radio");
      if (radioBtn) {
        radioBtn.checked = true;
      }
    });
  });
}

linkBtns();
