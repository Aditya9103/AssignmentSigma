const express = require('express');
const app = express();

// Route: Generate a random number
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    res.json({ random: randomNumber });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
