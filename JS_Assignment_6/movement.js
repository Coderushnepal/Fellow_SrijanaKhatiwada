function Main() {

    var ballons = [];

    this.start = function(n) {
        for (i = 1; i<=n; i++) {
            var ball = new newBallCreation(i);
            ball.create(i);

            var size = parseInt(Math.random() * (100) );
            ball.setBallSize(size, size);
           
            ball.setOrdinates(parseInt(Math.random() * 2000), Math.random());
            ballons.push(ball);

            var timeout = Math.random() * 5000;
            setTimeout(
                (function() {
                    var currentBall = ball;
                    return function() {
                        currentBall.direction();
                    };
                })(),
                timeout
            );
        }
    };

    this.removeBall = function() {
        setInterval(function(){
            ballons.map(function(ball){
                // console.log(ball);
                if (ball.getCoordinates().y > 0) {
                    ball.remove();
                }
            });
        });
    }
}

var main = new Main();
main.start(300);
main.removeBall();