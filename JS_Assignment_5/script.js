// bouncing balls without button
document.addEventListener("keydown", function (a) {
if (a.key= "Enter"){
var box = document.getElementById("box-1");
box.style.height= "500px";
box.style.width = "600px";
box.style.border = "1px solid black";
box.style.position = "absolute";
document.addEventListener("click", function () {

    var newCircle = document.createElement("div");
    newCircle.style.height = "20px";
    var i=0;
    newCircle.id= i;

newCircle.style.width = "20px";
newCircle.style.backgroundColor = "red";
newCircle.style.borderRadius = "50%";
newCircle.style.position = "absolute";
newCircle.style.top = Math.random() * (box.clientHeight-20) + "px";
newCircle.style.left = Math.random() * (box.clientWidth-20) + "px";
box.appendChild(newCircle);


var direction =1;
    setInterval(function () {
         var currentTop = newCircle.style.top;
    var newTop = parseInt(currentTop) + 10 * direction ;
    newCircle.style.top = newTop + "px";
    var clientHeight = box.clientHeight;
    if (newTop >= (clientHeight-20) || (newTop) <= 0 ){
        direction *= -1;
        newCircle.style.backgroundColor = "green";

    }

    },1000/60);
   
});
box.appendChild(newCircle);
i++;
}});



