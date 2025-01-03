const express = require('express');
const app = express();

// Route: Homepage
app.get('/', (req, res) => {
    res.json({ msg: "I am homepage" });
});

// Route: About page
app.get('/about', (req, res) => {
    res.json({ msg: "I am about page" });
});

// Route: Contact page
app.get('/contact', (req, res) => {
    res.json({ email: "support@pwskills.com" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

