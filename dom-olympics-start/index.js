document.getElementById("header").textContent = "JavaScript Made This!!";

// Left messages
document.getElementsByClassName("message left")[0].textContent =
  "I am a left message";
document.getElementsByClassName("message left")[1].textContent = "So! idc!";

// Right messages
document.getElementsByClassName("message right")[0].textContent =
  "I am a right message";
document.getElementsByClassName("message right")[1].textContent =
  "AND IDC MORE! :p";

// Clear messages
const clear = document.getElementById("clear-button");
function clearMessages() {
  document.querySelector(".messages").textContent = "";
}
clear.addEventListener("click", clearMessages);

// Blue-Brown Theme
const dropDown = document.getElementById("theme-drop-down");
const messagesL = document.getElementsByClassName("left");
const messagesR = document.getElementsByClassName("right");

function dropBlue() {
  if (dropDown.value === "theme-one") {
    messagesL[0].style.backgroundColor = "brown";
    messagesL[0].style.color = "blue";
    messagesL[1].style.backgroundColor = "brown";
    messagesL[1].style.color = "blue";
    messagesR[0].style.backgroundColor = "brown";
    messagesR[0].style.color = "blue";
    messagesR[1].style.backgroundColor = "brown";
    messagesR[1].style.color = "blue";
  }
}
dropDown.addEventListener("change", dropBlue);

// Red-Black Theme
function dropRed() {
  if (dropDown.value === "theme-two") {
    messagesL[0].style.backgroundColor = "black";
    messagesL[0].style.color = "red";
    messagesL[1].style.backgroundColor = "black";
    messagesL[1].style.color = "red";
    messagesR[0].style.backgroundColor = "black";
    messagesR[0].style.color = "red";
    messagesR[1].style.backgroundColor = "black";
    messagesR[1].style.color = "red";
  }
}
dropDown.addEventListener("change", dropRed);

//Send Message
const send = document.getElementsByTagNameNS("button");
const input = document.getElementById("input");
const sendMessages = document.getElementsByClassName("messages");

function myFunction() {
  const newM = document.createElement("div");
  newM.textContent = input.value;
  document.body.append(newM);
}
send.addEventListener("click", myFunction);
