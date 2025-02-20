function triggerClue(isPressed) {
  var clue = document.getElementById("clue");
  if (isPressed) {
    clue.style.display = "block";  // Show the clue when the mouse button is pressed
  } else {
    clue.style.display = "none";   // Hide the clue when the mouse button is released
  }
}