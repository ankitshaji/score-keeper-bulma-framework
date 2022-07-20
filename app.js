//elementObjects
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Span = document.querySelector("#p1Span");
const p2Span = document.querySelector("#p2Span");

//starting score variables
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

//eventListner method on buttonElementObject
p1Button.addEventListener("click", function () {
  if (p1Score !== winningScore) {
    p1Score++;
    p1Span.textContent = p1Score;
  }
});

//eventListner method on buttonElementObject
p2Button.addEventListener("click", function () {
  if (p2Score !== winningScore) {
    p2Score++;
    p2Span.textContent = p2Score;
  }
});
