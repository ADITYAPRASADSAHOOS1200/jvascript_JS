# Projects related to Dom

# project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-skrcjn?file=1-colorChanger%2Fstyle.css)

# Solution Code

## project1

```javascript
console.log("aditya");

const button = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector('body');
// console.log(body);

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = 'orange';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});

```
# Project 2

# Solution code

```javascript
console.log("aditya");
const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const weightguide = document.querySelector('#weight-guide');

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `please give valid number  ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `please give valid number ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  
    if (bmi <= 18.6) {
      weightguide.innerHTML = `<h1>BMI WEIGHT GUIDE<h1><strong>underweight</strong>=less than 18.6</h1>`;
    }else if(bmi >= 18.6 && bmi <=24.9 ){
      weightguide.innerHTML = `<h1>BMI WEIGHT GUIDE<h1><h1><strong>NormalRange</strong>= 18.6 and 24.9</h1>`;
    }else{
      weightguide.innerHTML = `<h1>BMI WEIGHT GUIDE<h1><h1><strong>Over Weight</strong>=greater than 24.9</h1>`;
    }
  }
});
```
## Project 3

# Solution Code

```javascript

console.log("aditya");
const clock =document.querySelector('#clock')

setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();  
},1000)

```
## Project 4

# Solution Code

```javascript

console.log("aditya");

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```



















```