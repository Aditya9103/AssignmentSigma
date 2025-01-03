const express = require('express');
const app = express();

// Counter variable to store the counter value
let counter = 0;

// Middleware to parse JSON (optional, not needed for this example but good practice)
app.use(express.json());

// Endpoint to get the current counter value
app.get('/', (req, res) => {
    res.json({ counter });
});

// Endpoint to increment the counter
app.post('/increment', (req, res) => {
    counter += 1;
    res.json({ counter });
});

// Endpoint to decrement the counter
app.post('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
