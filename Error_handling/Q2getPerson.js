function getPerson(person) {
    try {
        // Check if the input is an object and contains both 'name' and 'age' properties
        if (typeof person !== 'object' || person === null || !person.hasOwnProperty('name') || !person.hasOwnProperty('age')) {
            throw new Error("Invalid parameter type");
        }

        // Return the formatted string if the object is valid
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        // Return the error message if something goes wrong
        return error.message;
    }
}

// Test cases
console.log(getPerson({ name: "John", age: 30 })); // Should return "Name: John, Age: 30"
console.log(getPerson({ name: "Alice" })); // Should return "Invalid parameter type"
console.log(getPerson({ age: 25 })); // Should return "Invalid parameter type"
console.log(getPerson(null)); // Should return "Invalid parameter type"
console.log(getPerson("Not an object")); // Should return "Invalid parameter type"
