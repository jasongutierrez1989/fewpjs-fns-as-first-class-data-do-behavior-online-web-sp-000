/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input) {
  let wordArray = input.split(':');
  let num = parseInt(wordArray, 10);
  if (num[0] < 12) {
    let greeting = 'Good Morning';
  }
  else if (num[0] >= 12 && num[0] <= 5) {
    let greeting = 'Good Afternoon';
  }
  else {
    let greeting = 'Good Evening';
  }
  return wordArray;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
