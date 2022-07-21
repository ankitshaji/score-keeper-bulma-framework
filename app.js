//code seperation/grouping related code - p1 object
const p1 = {
  //Note -object keys are strings
  score: 0,
  button: document.querySelector("#p1Button"),
  span: document.querySelector("#p1Span"),
};
//code seperation/grouping related code- p2 object
const p2 = {
  //Note -object keys are strings
  score: 0,
  button: document.querySelector("#p2Button"),
  span: document.querySelector("#p2Span"),
};

//general named function expression for both p1 and p2
//parameters (player,opponent) can take in arguments
//(p1Object,p2Object) or (p2Object,p1Object)
function updateScores(player, opponent) {
  if (!isGameOver) {
    //if(true)
    //object.property
    player.score++;

    if (player.score === winningScore) {
      isGameOver = true;

      //bulma css framework color classes
      //object.property = elementObject
      player.span.classList.add("has-text-success"); //DOMTokenListObject.method()
      opponent.span.classList.add("has-text-danger");

      //object.property = elementObject
      //elementObject.property - disable buttons
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    //object.property = elementObject
    player.span.textContent = player.score.toString();
  }
}

//general elementObjects
const resetButton = document.querySelector("#reset");
const playToselect = document.querySelector("#playTo");

//game ending variables
let isGameOver = false;
let winningScore = 3;

//eventListner method on buttonElementObject
//when EventString happens on eventObject(Target) - pass in argument + Execute function expression
p1.button.addEventListener("click", function () {
  //generalised named function exectuted - arguments p1,p2
  updateScores(p1, p2);
});

//eventListner method on buttonElementObject
//when EventString happens on eventObject(Target) - pass in argument + Execute function expression
p2.button.addEventListener("click", function () {
  //generalised named function exectuted - arguments p2,p1
  updateScores(p2, p1);
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
  //generalised object reset - loop over both objects
  for (let p of [p1, p2]) {
    p.score = 0;
    p.span.textContent = "0";
    p.span.classList.remove("has-text-success", "has-text-danger"); //DOMTokenListObject.method()
    //elementObject.property - un-disable buttons
    p.button.disabled = false;
  }
}
