// solution 1 password toggle 


function Toggle() { 
    var temp = document.getElementById("typePassword"); 
    var icon = document.getElementsByClass("far")
    if (temp.type === "password") { 
        temp.type = "text"; 
    } 
    else { 
        temp.type = "password"; 
    } 
    if (icon.class === "fa-eye") {
        icon.class = "fa-eye-slash";
    }
    else {
        icon.class = "fa-eye";
    }
} 


// soolution 2 random circles


// button click
// -> randomly generate x, y
// -> create new element (div)
// -> div.style.top -> y and div.style.left = x
// -> color, position absolute and circle


