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

// for win result
var winResult= document.createElement('div');
winResult.id = "winResult";
wholeContainer.appendChild(winResult);
var winMessage = document.createElement('div');
winMessage.classList.add('winMessage');
winMessage.innerHTML="YOU WIN";
winResult.appendChild(winMessage);

// for loss result
var lossResult= document.createElement('div');
lossResult.id = ('lossResult');
wholeContainer.appendChild(lossResult);
lossMessage = document.createElement('div');
lossMessage.classList.add('lossMessage');
lossMessage.innerHTML = "SORRY YOU LOST";
lossResult.appendChild(lossMessage);


var hints = ['Movie', 'Nepali actor', 'Difficult PL', 'Food'];
var answers = ['lucy', 'rajeshhamal', 'javascript' , 'chicken'];


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

// for pop-up message 
var popUp= document.createElement('div');
popUp.classList.add('popUp');
wholeContainer.appendChild(popUp);
var popUpMessage = document.createElement('h3');
popUpMessage.classList.add('popUpMessage');
popUpMessage.innerHTML = "YOU HAVE ALREADY GUESSED THIS LETTER";
popUp.appendChild(popUpMessage);

var pressedKeys = []; //to store pressed key values
var correctLetters = [];
var wrongLetters = [];
var letters = document.querySelectorAll('.letterDash');

document.addEventListener("keydown", function (e) {
    if (randomAns.includes(e.key)) {
      if(correctLetters.includes(e.key)){
          popUp.style.display = 'inline-block';
          setTimeout(()=> {
            popUp.style.display = 'none';
          },2000);
      }
      for (var j = 0; j < randomAns.length; j++) {
        if (randomAns[j] === e.key) {
          letters[j].innerHTML = e.key;
          correctLetters.push(e.key);

          if (correctLetters.length === randomAns.length){
            var winDiv = this.getElementById('winResult');
            winDiv.style.display= "inline-block";
        }
      }
    }
   }
    else {
    displayFigureParts();
    var wrongLetterSpan = document.createElement('span');
    wrongLetterSpan.classList.add('wrongLetterSpan')
    wrongLetterSpan.innerHTML = e.key ;
    wrongDiv.appendChild(wrongLetterSpan);
   if (!wrongLetters.includes(e.key)){
      wrongLetters.push(e.key);

   } 
   else {
       popUp.style.display = 'inline-block';
   setTimeout(()=> {
     popUp.style.display = 'none';
   },2000);
   }
   if (wrongLetters.length=== 6 ){
     var lossDiv = this.getElementsByClassId('lossResult');
     lossDiv.style.display = 'inline=block';
   }

 
  }
});