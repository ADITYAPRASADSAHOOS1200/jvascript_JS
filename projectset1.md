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