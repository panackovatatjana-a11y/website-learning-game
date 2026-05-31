const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerImg = new Image();
playerImg.src = "ship.png"; //Path to the ship image

let playerX= 50;
let playerY = canvas.height / 2;
const playerWidth = 50; // Adjust width of the player
const playerHeight =50; // Adjust height of the player
const playerSpeed = 5;

let obstacleX = canvas.width;
let obstacleY = canvas.height / 2;
const obstacleWidth = 20;
const obstacleHeight = 20;
const obstacleSpeed  = 3;

let collision = false;

function drawPlayer() {
    if (playerImg.complete) {
        // Check if the image is ;oaded
        ctx.drawImage(playerImg, playerX, playerY, playerWidth, playerHeight);

    }
}

function drawObstacle() {
    ctx.fillStyle = collision ? "red" : "grey"; //Change color to red when collision occurs
    ctx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);

}

function moveObstacle() {
    obstacleX -= obstacleSpeed;
    if (obstacleX + obstacleWidth < 0) {
    obstacleX = canvas.width;
    obstacleY = Math.random() * canvas.height;
}

}

function checkCollision() {
    if (
      playerX < obstacleX + obstacleWidth &&
      playerX + playerWidth > obstacleX &&
      playerY < obstacleY + obstacleHeight &&
      playerY + playerHeight > obstacleY

    ) {
        // Collision detected, set collision to true
        collision = true;

    }
}

function updateGameArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawObstacle();
    moveObstacle();
    checkCollision();
    requestAnimationFrame(updateGameArea);

}

document.addEventListener("keydown", (event) => {
    if (event.key==="ArrowUp" && playerY > 0) { playerY -= playerSpeed;

    }
    else if (
        event.key === "ArrowDown" &&
        playerY + playerHeight < canvas.height
    ) {
        playerY += playerSpeed;

    }
});

updateGameArea();

