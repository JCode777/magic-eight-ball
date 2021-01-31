
const eightBall = {
   0: 'It is certain',
   1: 'It is decidedly so',  
   2: 'Reply hazy try again',
   3: 'Cannot predict now',
   4: 'Do not count on it',
   5: 'My sources say no',
   6: 'Outlook not so good',
   7: 'Signs point to yes',
   answer () {
     return this[Math.floor(Math.random() * 8)]
   }
}

// cached nodes
const quest = document.querySelector('#quest');
const question = document.querySelector('#question');
const fortune = document.querySelector('#fortune');
const askMe = document.querySelector('#askMe');

// handler
const handler = () => {
  question.textContent = `You asked: ${quest.value}?`;
  quest.value = "";
  fortune.textContent = eightBall.answer();
}

//listener
askMe.onclick = handler;

/* Thanks to Roy (Forum Moderator at Codecademy) for some great ideas to make this project better!! My initial version used prompts for input and utilized a switch statement. Roy suggested changing the switch over to an object which essentially cut the lines of code on that portion in half.

Roy also provided the code that made use of forms to handle inputting and submitting the question and returning the answer. This replaced my original prompt method to retrieve the question and using innerHTML to place the answer in the Magic Eight Ball.

Thanks for all the help Roy!! See the link to our conversation below:

https://discuss.codecademy.com/t/magic-eight-ball-webpage/540132/19


Here is my original code for the Magic Eight Ball Project before getting assistance from Roy to improve it greatly.

let userName = prompt('What is your name?');

let userQuestion = userName ? prompt(`Hello, ${userName}, what is your question?`) : prompt("What is your question?");


document.getElementById('question').innerHTML = `Ok ${userName}, you asked: ${userQuestion}`;



let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

document.getElementById('fortune').innerHTML = eightBall;
*/
