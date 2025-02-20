function triggerClue(isPressed) {
  var clue = document.getElementById("clue");
  if (isPressed) {
    clue.style.display = "block";
  } else {
    clue.style.display = "none";
  }
}