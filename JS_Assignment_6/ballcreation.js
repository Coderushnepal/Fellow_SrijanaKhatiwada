
function newBallCreation() {
    var that = this;
    this.create = function() {
        this.ball = document.createElement('div');
        this.ball.style.position = "absolute";
        this.ball.style.borderRadius = "50%";

        var colorBall = [ "Blue", "Red", "Black","Brown", "Purple", "Pink"];
        this.ball.style.backgroundColor = colorBall[Math.floor(Math.random() * colorBall.length)];
        document.body.appendChild(this.ball);  
    }
    
    this.setBallSize = function(width , height) {
        this.ball.style.width = width + 'px';
        this.ball.style.height = height + 'px';
    };

  // coordinates of ball
    this.setOrdinates = function ( dx, dy ) {
        this.ball.style.left = dx + 'px';
        this.ball.style.top = dy + 'px';
    };
// deletion of balls 
this.deleteBalls = function(){
    if( this.ball.style.top == document.height){
            document.body.removeChild(this.ball);

    }
}
    
  

    // Function for the fall of balls
//     this.direction = function() {
//         setInterval(function(){
//             var currentTop = that.ball.style.top;
//             var nextTop = parseInt(currentTop) + (Math.floor(Math.random()) * 10) + "px";
//             console.log(nextTop);
//         }, 1000/60);
//     };

setInterval(function () {
    var currentTop = that.ball.style.top;
    var newTop = parseInt(currentTop) + 0.5 * 5 ;
that.ball.style.top = newTop + "px";
var clientHeight = box.clientHeight;
// if (newTop >= (clientHeight-20) || (newTop) <= 0 ){
//    direction *= -1;
//    newCircle.style.backgroundColor = "green";

},1000/60);





}