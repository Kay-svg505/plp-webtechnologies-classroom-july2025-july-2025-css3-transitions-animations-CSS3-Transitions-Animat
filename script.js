// === Part 2: JavaScript Functions, Scope, Parameters & Return ===

// Global variable example
let globalMultiplier = 2;

// Function with parameters & return value
function squareNumber(num) {
  // Local variable (scope limited to this function)
  let result = num * num * globalMultiplier;
  return result;
}

// Function to display calculation result
function displaySquare() {
  let number = 5; // Example input
  let squared = squareNumber(number);
  document.getElementById("calcResult").textContent =
    `Square of ${number} (x${globalMultiplier}) = ${squared}`;
}

// Attach event listener
document.getElementById("calcBtn").addEventListener("click", displaySquare);


// === Part 3: Combining CSS + JavaScript ===
function toggleAnimation() {
  let box = document.getElementById("jsBox");
  box.classList.toggle("animate");
}

// Button triggers animation
document.getElementById("animateBoxBtn").addEventListener("click", toggleAnimation);
