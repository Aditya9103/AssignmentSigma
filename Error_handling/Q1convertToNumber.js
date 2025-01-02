function convertToNumber(str) {
    try {
        // Attempt to convert the string to a number
        let num = Number(str);
        
        // Check if the conversion resulted in NaN (Not-a-Number)
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        
        return num;
    } catch (error) {
        // Return the error message if an invalid number is encountered
        return error.message;
    }
}

// Test cases
console.log(convertToNumber("123")); // Should return 123
console.log(convertToNumber("abc")); // Should return "Invalid number"
console.log(convertToNumber("45.67")); // Should return 45.67
console.log(convertToNumber("")); // Should return "Invalid number"
