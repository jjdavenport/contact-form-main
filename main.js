const input = document.querySelectorAll("input");
const error = document.querySelectorAll(".error");
const submitBtn = document.getElementById("submit-button");
const form = document.getElementById("form");
let inputValue = null;

function handleSubmit(e) {
  e.preventDefault();
}

form.addEventListener("submit", handleSubmit);

submitBtn.addEventListener("click", () => {
  validateEmail();
  validateTextInputs();
  validateRadioBtns();
});

function validateTextInputs() {
  const textInputs = document.querySelectorAll(".input-text");
  textInputs.forEach((i) => {
    const errorText = i.nextElementSibling;
    if (i.value === "") {
      errorText.classList.add("error-text-active");
    } else {
      errorText.classList.remove("error-text-active");
    }
  });
}

function validateRadioBtns() {
  const radioBtns = document.querySelectorAll(".input-radio");
  radioBtns.forEach((r) => {
    const errorRadioBtns = r.nextElementSibling;
    if (r.checked === false) {
      errorRadioBtns.classList.add("error-text-active");
    } else {
      errorRadioBtns.classList.remove("error-text-active");
    }
  });
}

function validateEmail() {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailInput = document.getElementById("email-input");
  const errorEmail = emailInput.nextElementSibling;
  if (emailInput.value === "") {
    errorEmail.classList.add("error-text-active");
  } else if (emailInput.value.match(regEx)) {
    errorEmail.classList.remove("error-text-active");
  } else {
    errorEmail.classList.add("error-text-active");
  }
}
