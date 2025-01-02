class Person {
    // Constructor with default parameter values
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    // Method to return the person's details
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Instantiate the Person class with no arguments (defaults will be used)
const person1 = new Person();

// Instantiate the Person class with custom arguments
const person2 = new Person("Alice", 30);

// Instantiate the Person class with only one argument (age will default to 0)
const person3 = new Person("Bob");

// Call the getDetails method on each instance
console.log(person1.getDetails()); // Should return "Name: Unknown, Age: 0"
console.log(person2.getDetails()); // Should return "Name: Alice, Age: 30"
console.log(person3.getDetails()); // Should return "Name: Bob, Age: 0"
