"strict mode";

// Selecting elements
const ratingState = document.querySelector(".rating-state");
const thanksState = document.querySelector(".thank-you-state");
const ratings = document.querySelectorAll(".rating");
const yourRate = document.querySelector("#your-rate");
const overlay = document.querySelector(".overlay");
// buttons
const submit = document.querySelector(".submit-btn");
const rateAgain = document.querySelector(".rate-again");

let selected = "";

function removeSelectedRate() {
  ratings.forEach((rate) => {
    rate.classList.remove("selected");
  });
}

function addHiddenClass() {
  overlay.classList.add("hidden");
}

ratings.forEach((rate) =>
  rate.addEventListener("click", (e) => {
    rate.classList.add("selected");
    selected = e.target.textContent;
  })
);

submit.addEventListener("click", function () {
  if (selected) {
    yourRate.textContent = selected;
    ratingState.classList.add("hidden");
    thanksState.classList.remove("hidden");
  } else {
    overlay.classList.remove("hidden");
    setTimeout(addHiddenClass, 3000);
  }
});

rateAgain.addEventListener("click", function () {
  selected = "";
  removeSelectedRate();
  ratingState.classList.remove("hidden");
  thanksState.classList.add("hidden");
});
