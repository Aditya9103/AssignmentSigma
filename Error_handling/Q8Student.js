// Define the Student constructor function (this is how we create prototype-based objects)
function Student(name) {
    this.name = name; // Initialize the 'name' property
}

// Add the printDetails method to the Student prototype
Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Instantiate a Student object with the name "Mithun"
const student1 = new Student("Mithun");

// Call the printDetails method
student1.printDetails(); // Should log: "Hello, my name is Mithun"
