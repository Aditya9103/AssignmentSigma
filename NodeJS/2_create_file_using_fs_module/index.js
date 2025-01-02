const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'nodejs_architecture.txt');

const data = `
Node.js Architecture:
- Single-threaded
- Event-driven
- Non-blocking I/O model
- Built on Google Chrome's V8 JavaScript Engine
`;

fs.writeFile(filePath, data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File created successfully at:', filePath);
    }
});
