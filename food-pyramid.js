// Function to increment the counter by 1
function incrementCounter(counterNumber) {
    var counterElement = document.getElementById('counter' + counterNumber); // Get the counter element by ID
    var currentValue = parseInt(counterElement.textContent); // Get the current value of the counter
    counterElement.textContent = currentValue + 1; // Increment the counter value by 1
}

// Function to decrement the counter by 1
function decrementCounter(counterNumber) {
    var counterElement = document.getElementById('counter' + counterNumber); // Get the counter element by ID
    var currentValue = parseInt(counterElement.textContent); // Get the current value of the counter
    if (currentValue > 0) { // Check if the current value is greater than 0
        counterElement.textContent = currentValue - 1; // Decrement the counter value by 1 if it's greater than 0
    }
}



