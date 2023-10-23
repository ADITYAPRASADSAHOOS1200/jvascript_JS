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
## Project 3

# Solution Code

```javascript

console.log("aditya");

```



















```