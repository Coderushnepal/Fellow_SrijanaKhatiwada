var wholeContainer = document.createElement('div');
wholeContainer.classList.add('wholeContainer');
wholeContainer.style.width = '100%';
document.body.appendChild(wholeContainer);

var gameContainer = document.querySelectorAll('.game-container');

var heading = document.createElement('h1');
heading.classList.add('heading');
heading.innerHTML = "Hangman";
wholeContainer.appendChild(heading);
var linebreak = document.createElement('br');
heading.appendChild(linebreak);

var instructions = document.createElement('span');
instructions.classList.add('instructions');
instructions.innerHTML = 'Guess the word, enter the letters';
heading.appendChild(instructions);
// var linebreak = document.createElement('br');
// instructions.appendChild(linebreak);


var dashDiv = document.createElement('div');
dashDiv.classList.add('dashDiv');
wholeContainer.appendChild(dashDiv);

var hints = ['Movie', 'Nepali actor', 'Diffucult PL', 'Food'];
var answers = ['lucy', 'rajeshhamal', 'javascript', 'chicken'];

var randomAns = 0;
var randomAns= answers[Math.floor(Math.random()*answers.length)];

for (var i = 0; i<randomAns.length; i++) {
    var letterDash = document.createElement('div');
    letterDash.classList.add('letterDash');
    letterDash.innerHTML= '_';
    dashDiv.appendChild(letterDash);
}