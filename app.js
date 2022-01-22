const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");

canvasEl.height = 600;
canvasEl.width = 800;

let xPosition = 400; 
let yPosition = 300;
let radius = 50; 
let speed = 10;

// Run the game --> game loop
function runGame() { 
    requestAnimationFrame(runGame)

    drawBall()
}

// drawing the ball
function drawBall() { 
    canvasContext.fillStyle = 'white'
    canvasContext.beginPath()
    canvasContext.arc(xPosition, yPosition, radius, 0, Math.PI * 2)
}



runGame();