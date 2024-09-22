
const colorDisplay = document.getElementById("colorDisplay");
const squares = document.querySelectorAll(".square");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");

let colors = [];
let pickedColor;

// Initialize the game
function init() {
    setupSquares();
    resetGame();
}


function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Congratulations U R Correct!";
                changeColors(pickedColor);
                alert("Congratulations! You guessed the correct color: " + pickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Pz Try Again!";
                this.classList.add("shake");
                setTimeout(() => {
                    this.classList.remove("shake");
                }, 500);
            }
        });
    }
}

// Reseting game with new color
function resetGame() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        squares[i].style.animation = "fadeIn 0.5s ease";
    }
}

// Changing all colors of squares to the correct color code 
function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// Pick a random color from the colors array
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Generate an array of random RGB colors
function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// generarting a random RGB color code
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Reseting it on clicking on reset
resetButton.addEventListener("click", function() {
    resetGame();
});

// Start the game
init();
