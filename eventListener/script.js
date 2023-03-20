const square = document.getElementById("square");

// Blue
function hoverBlue() {
  square.style.backgroundColor = "blue";
}
square.addEventListener("mouseover", hoverBlue);
window.addEventListener("keypress", (e) => {
  if (e.key === "b") {
    hoverBlue();
  }
});

// Red
function holdRed() {
  square.style.backgroundColor = "red";
}
square.addEventListener("mousedown", holdRed);
window.addEventListener("keypress", (e) => {
  if (e.key === "r") {
    holdRed();
  }
});

// Yellow
function releaseYellow() {
  square.style.backgroundColor = "yellow";
}
square.addEventListener("mouseup", releaseYellow);
window.addEventListener("keypress", (e) => {
  if (e.key === "y") {
    releaseYellow();
  }
});

// Green
function dblclickGreen() {
  square.style.backgroundColor = "green";
}
square.addEventListener("dblclick", dblclickGreen);
window.addEventListener("keypress", (e) => {
  if (e.key === "g") {
    dblclickGreen();
  }
});

// Orange
function scrollOrange() {
  square.style.backgroundColor = "orange";
}
square.addEventListener("wheel", scrollOrange);
document.body.addEventListener("wheel", scrollOrange);
window.addEventListener("keypress", (e) => {
  if (e.key === "o") {
    scrollOrange();
  }
});
