class Car {
    // Constructor to initialize the properties
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    // Method to return the car description
    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

// Instantiate the Car class
const myCar = new Car("Toyota", "Corolla", 2022);

// Call the getDescription method
console.log(myCar.getDescription()); // Should return "This is a 2022 Toyota Corolla"
