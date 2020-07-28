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

// dashes container
var dashDiv = document.createElement('div');
dashDiv.classList.add('dashDiv');
wholeContainer.appendChild(dashDiv);



var hints = ['Movie', 'Nepali actor', 'Difficult PL', 'Food'];
var answers = ['lucy', 'rajeshhamal', 'javascript' , 'chicken'];
// var answers = [['l', 'u', 'c', 'y'],['r', 'a', 'j', 'e', 's','h', 'h', 'a', 'm', 'a', 'l' ], ['j', 'a', 'v','a','s','c','r','i' , 'p' , 't'], ['c', 'h', 'i', 'c', 'k', 'e', 'n' ] ];




// wrong letters displayer
var wrongDiv = document.createElement('div');
wrongDiv.classList.add('wrongDiv');
wholeContainer.appendChild(wrongDiv);
var wrongTitle = document.createElement('h2');
wrongTitle.classList.add('wrongTitle');
wrongTitle.innerHTML = 'Wrong Letters';
wrongTitle.style.color = 'white';
wrongTitle.style.fontWeight= 'bold';
wrongDiv.appendChild(wrongTitle);


var randomAns = '';
var randomAns= answers[Math.floor(Math.random()*answers.length)];

for (var i = 0; i<randomAns.length; i++) {
    var letterDash = document.createElement('div');
    letterDash.classList.add('letterDash');
    letterDash.style.borderBottom = ('4px solid rgb(252, 227, 227)');
    
    dashDiv.appendChild(letterDash);
}

// function to display parts
var counter = 0;
var displayParts = document.querySelectorAll(".figure-part");
function displayFigureParts() {
  var part = Array.from(displayParts);
  part[counter].style.display = "block";
  counter++;
}

var letters = document.querySelectorAll('.letterDash');

document.addEventListener("keydown", function (e) {
    if (randomAns.includes(e.key)) {
      for (var j = 0; j < randomAns.length; j++) {
        if (randomAns[j] === e.key) {
          letters[j].innerHTML = e.key;
        }
      }
    } else {
      displayFigureParts();
var wrongLetterSpan = document.createElement('span');
wrongLetterSpan.classList.add('wrongLetterSpan')
wrongLetterSpan.innerHTML = e.key ;
wrongDiv.appendChild(wrongLetterSpan);
}
});

