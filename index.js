/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input) {
  wordArray = input.split(':');
  input = parseInt(wordArray, 10);

}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
