// Function that returns a closure to filter products by category
function filterByCategory(products) {
    // The returned function filters products based on the category
    return function(category) {
        // Use the filter method to return products that match the category
        return products.filter(product => product.category === category);
    };
}

// Example usage
const products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 20 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Jeans", category: "Clothing", price: 40 },
    { name: "Tablet", category: "Electronics", price: 600 }
];

// Create the filtering function based on the products array
const filterElectronics = filterByCategory(products);

// Filter products by category "Electronics"
console.log(filterElectronics("Electronics"));
// Output: [
//     { name: "Laptop", category: "Electronics", price: 1200 },
//     { name: "Smartphone", category: "Electronics", price: 800 },
//     { name: "Tablet", category: "Electronics", price: 600 }
// ]

// Filter products by category "Clothing"
console.log(filterElectronics("Clothing"));
// Output: [
//     { name: "Shirt", category: "Clothing", price: 20 },
//     { name: "Jeans", category: "Clothing", price: 40 }
// ]
