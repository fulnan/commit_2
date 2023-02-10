const hidden = document.getElementsByClassName("demo")[0];
console.log(hidden);
const confirmation = document.getElementById("confirmation");
console.log(confirmation);
const err = document.getElementById("err");
console.log(err);
const input = document.getElementById("input");
console.log(input);
const password = document.getElementById("password");
console.log(password);
const confirm = document.getElementById("confirm");
console.log(confirm);
const bag = document.getElementById("bag");
console.log(bag);
const $password = document.getElementsByClassName("password")[0];
console.log($password);
const _confirm = document.getElementsByClassName("confirm")[0];
console.log(_confirm);
const submit = document.getElementById("demo");
console.log(submit);
const login = document.getElementsByClassName("login")[0];
console.log(login);
let whot = "TRRR";
let pro = "";
let passwordValue = "";
let confirmPasswordValue = "";

input.addEventListener("change", function (event) {
  whot = event.target.value;
  console.log(whot);
  return whot;
});

bag.addEventListener("change", function (event) {
  pro = event.target.value;
  console.log(pro);
  return pro;
});

password.addEventListener("change", function (event) {
  passwordValue = event.target.value;
  console.log(passwordValue);
});

confirm.addEventListener("change", function (event) {
  confirmPasswordValue = event.target.value;
  console.log(confirmPasswordValue);
});

submit.addEventListener("submit", function (event) {
  event.preventDefault();
  myFuncton();
  myPassword();
});

function myFuncton() {
  const display = document.createElement("p");
  if (display.innerHTML != "") {
    return;
  }
  display.innerHTML = `${whot + " " + pro}`;
  hidden.appendChild(display);
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home");
  homeDiv.style.backgroundColor = "blue";
  homeDiv.style.width = "30px";
  homeDiv.style.height = "30px";
  homeDiv.style.borderRadius = "30px";
  homeDiv.style.textAlign = "center";
  hidden.appendChild(homeDiv);
  const paragraph = document.createElement("p");
  paragraph.innerText = whot.split("")[0].toUpperCase();
  paragraph.style.color = "white";
  paragraph.style.display = "flex";
  paragraph.style.justifyContent = "center";
  paragraph.style.flexDirection = "column";
  paragraph.style.alignItems = "center";
  paragraph.style.paddingTop = "08px";
  homeDiv.appendChild(paragraph);
  input.value = "";
  bag.value = "";
}

function myPassword() {
  password.value = "";
  if (passwordValue.length <= 6 || passwordValue !== confirmPasswordValue) {
    hidden.style.display = "none";
    err.innerHTML = `Check your password or the confirmation`;
    err.style.color = "red";
  } else {
    hidden.style.display = "flex";
    hidden.style.flexWrap = "wrap";
    alert("You're welcome");
    login.innerHTML = "Sign out";
    login.addEventListener("click", function () {
      login.innerHTML = "Sign in";
    });
  }
  if (confirmPasswordValue == "") {
    hidden.style.display = "none";
    err.innerHTML = "Your confirmation is empty";
    err.style.color = "red";
  }
  confirm.value = "";
};
