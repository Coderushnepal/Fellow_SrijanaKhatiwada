// solution 1 password toggle 

var temp = document.getElementById("typePassword"); 
var icon = document.getElementById("toggleIcon");
function showPassword(){ 
    
    if (temp.type === "password") { 
        temp.type = "text"; 
        icon.className= "far fa-eye";
        
    } 
    else { 
        temp.type = "password"; 
        icon.className= "far fa-eye-slash";

    } 
    
     
} 


// soolution 2 random circles
const buttn = document.getElementById('buttn');
const frame = document.getElementById('frame');
const height = frame.clientHeight;
const width = frame.clientWidth;
const margin = window.innerHeight - height;
console.log(height, width, margin);
buttn.onclick = function(e) {
	var newCircle = document.createElement('div');
	newCircle.classList.add('circle');
	newCircle.style.top = margin + Math.random() * height + 'px';
	newCircle.style.left = Math.random() * width + 'px';
	frame.appendChild(newCircle);
};

// button click
// -> randomly generate x, y
// -> create new element (div)
// -> div.style.top -> y and div.style.left = x
// -> color, position absolute and circle


