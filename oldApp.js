//elementObjects
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Span = document.querySelector("#p1Span");
const p2Span = document.querySelector("#p2Span");
const resetButton = document.querySelector("#reset");
const playToselect = document.querySelector("#playTo");

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
      //bulma css framework color classes
      p1Span.classList.add("has-text-success"); //DOMTokenListObject.method()
      p2Span.classList.add("has-text-danger");
      //elementObject.property - disable buttons
      p1Button.disabled = true
      p2Button.disabled = true
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
      p2Span.classList.add("has-text-success"); //DOMTokenListObject.method()
      p1Span.classList.add("has-text-danger");
      //elementObject.property - disable buttons
      p1Button.disabled = true
      p2Button.disabled = true
    }
    p2Span.textContent = p2Score.toString();
  }
});

playToselect.addEventListener("change", function (e) {
  //this - elementObject(Target) - Execution Context
  winningScore = window.parseInt(this.value);
  reset();
});

//eventListner method on buttonElementObject
//when EventString happens on eventObject(Target) - pass in argument + Execute function expression
resetButton.addEventListener("click", reset);

//code seperation
//named callback function expression
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Span.textContent = "0";
  p2Span.textContent = "0";
  p1Span.classList.remove("has-text-success", "has-text-danger"); //DOMTokenListObject.method()
  p2Span.classList.remove("has-text-success", "has-text-danger");
  //elementObject.property - un-disable buttons
  p1Button.disabled = false
  p2Button.disabled = false
}
