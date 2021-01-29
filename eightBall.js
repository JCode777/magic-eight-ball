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
