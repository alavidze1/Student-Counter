let count = 0;

// Select the count element and the saved counts element
const countEl = document.getElementById('count-el');
const savedCountsEl = document.getElementById('saved-counts-el');

// Function to increment the count
function increment() {
    count++;
    countEl.textContent = count;
}

// Function to save the count
function save() {
    if (count === 0) {
        //Makes it unable to save 0
    } else {
        // Append the current count to the saved counts section
        let savedCount = count + ' - ';
        savedCountsEl.textContent += savedCount;
        
        // Reset the count after saving
        count = 0;
        countEl.textContent = count;
        errorEl.textContent = ''; // Clear any previous error message
    }
}
// Attach event listeners to the buttons
document.getElementById('increment-btn').addEventListener('click', increment);
document.getElementById('save-btn').addEventListener('click', save);