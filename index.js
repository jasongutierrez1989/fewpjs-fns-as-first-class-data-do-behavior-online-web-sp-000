/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input) {
  wordArray = input.split(':');
  input = parseInt(wordArray, 10);
   let greeting = null;
  if (wordArray[0] < 12) {
    greeting = 'Good Morning';
  }
  else if (wordArray[0] >= 12 && wordArray[0] <= 5) {
    greeting = 'Good Afternoon'
  }
  else {
    greeting = 'Good Evening';
  }
  return greeting;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
