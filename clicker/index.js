// For this assignment, reference the last two articles.
// Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer)
// and displays that click count to the user. Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.

// **Extra credit:** Put a countdown timer (10-30 seconds) on the page that stops the user's clicks from counting towards the total after the timer ends.

let count = 0;
let timer = 30;

const counter = document.querySelector("#counter");
const timerEl = document.querySelector("#timer");

const countClicks = () => {
  count++;
  counter.textContent = count;
};

const startTimer = () => {
  timerEl.textContent = timer;
  timer--;
  if (timer < 0) {
    clearInterval(timerInterval);
    window.removeEventListener("click", countClicks);
    localStorage.setItem("count", count);
  }
};

const timerInterval = setInterval(startTimer, 1000);

window.addEventListener("click", countClicks);
window.addEventListener("load", () => {
  count = localStorage.getItem("count");
  counter.textContent = count;
});
