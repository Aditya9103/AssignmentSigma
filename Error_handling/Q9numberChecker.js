// numberChecker function that returns a closure
function numberChecker(numbers) {
    // The returned function checks if a number is in the array
    return function(number) {
        return numbers.includes(number); // Check if the number is in the array
    };
}

// Example usage
const checkPresence = numberChecker([1, 2, 3, 4, 5]);

console.log(checkPresence(3)); // Should return true
console.log(checkPresence(6)); // Should return false
console.log(checkPresence(1)); // Should return true
