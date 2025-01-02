class Employee {
    // Constructor to initialize the properties
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    // Method to return the employee's salary
    getSalary() {
        return this.salary;
    }
}

// Instantiate the Employee class
const employee1 = new Employee("John Doe", "Software Engineer", 75000);

// Call the getSalary method
console.log(employee1.getSalary()); // Should return 75000
