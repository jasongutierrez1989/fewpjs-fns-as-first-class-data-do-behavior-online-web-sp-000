/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input) {
  let wordArray = input.split(':');
  let num = parseInt(wordArray, 10);
   let greeting = null;
  if (num[0] < 12) {
    greeting = 'Good Morning';
  }
  else if (num[0] >= 12 && num[0] <= 5) {
    greeting = 'Good Afternoon'
  }
  else {
    greeting = 'Good Evening';
  }
  return greeting;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
