//elementObjects
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Span = document.querySelector("#p1Span");
const p2Span = document.querySelector("#p2Span");
const resetButton = document.querySelector("#reset");

//starting score variables
let p1Score = 0;
let p2Score = 0;
//game ending variables
let isGameOver = false;
let winningScore = 5;

//eventListner method on buttonElementObject
//when EventString happens on eventObject(Target) - pass in argument + Execute function expression
p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    //if(true)
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Span.textContent = p1Score.toString();
  }
});

//eventListner method on buttonElementObject
//when EventString happens on eventObject(Target) - pass in argument + Execute function expression
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    //if(true)
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Span.textContent = p2Score.toString();
  }
});

//eventListner method on buttonElementObject
//when EventString happens on eventObject(Target) - pass in argument + Execute function expression
resetButton.addEventListener("click", function () {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Span.textContent = "0";
  p2Span.textContent = "0";
});
