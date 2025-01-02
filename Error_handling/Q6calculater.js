class Calculator {
    // Static method to add two numbers
    static add(a, b) {
        return a + b;
    }
}

// Calling the static add method directly on the Calculator class
console.log(Calculator.add(5, 10));  // Should return 15
console.log(Calculator.add(3, 7));   // Should return 10
console.log(Calculator.add(-5, 20)); // Should return 15
