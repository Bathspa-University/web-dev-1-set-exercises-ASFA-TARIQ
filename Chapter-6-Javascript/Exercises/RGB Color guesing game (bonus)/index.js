const RGBColorValue = document.getElementById('RGB-Color-value');
const circles = document.querySelectorAll('.circle'); // Select all elements with class 'circle'
const Lives = document.getElementById('Lives');
const Points = document.getElementById('Points');
const PlayAgain = document.getElementById('Play-Again');
const DisplayMessage = document.getElementById('Message');

let colors = [];
let correctColor;
let lives = 3;
let points = 0;

function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function generateColors() {
    colors = [];
    for (let i = 0; i < 4; i++) { // Generate colors for 4 circles
        colors.push(generateRandomColor());
    }
    correctColor = colors[Math.floor(Math.random() * colors.length)];
}

function updateCircles() {
    circles.forEach((circle, index) => {
        circle.style.backgroundColor = colors[index];
    });
}

function updateLives() {
    Lives.innerHTML = `Lives: ${lives}`;
}

function updatePoints() {
    Points.innerHTML = `Points: ${points}`;
}

function updateRGBValue() {
    RGBColorValue.innerHTML = `RGB Color Value: ${correctColor}`;
}

// Function for checking the answers that user have guessed correct
function checkAnswer(color) {
    if (color === correctColor) {
        points++;
        updatePoints();
        generateColors();
        updateCircles();
        updateRGBValue();
        DisplayMessage.textContent = "Well Played";
    } else {
        lives--;
        updateLives();
        if (lives === 0) {
            DisplayMessage.textContent = "Better Luck Next time";
            resetGame();
        } else {
            DisplayMessage.textContent = "Try Giving It Another Try";
        }
    }
}


function resetGame() {
    lives = 3;
    points = 0;
    generateColors();
    updateCircles();
    updateLives();
    updatePoints();
}

function initializeGame() {
    generateColors();
    updateCircles();
    updateLives();
    updatePoints();
    updateRGBValue();

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            checkAnswer(circle.style.backgroundColor);
        });
    });

    PlayAgain.addEventListener('click', resetGame);
}


initializeGame();
