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
const additionalData = `
Advantages of Node.js:
- Highly scalable
- Fast execution of code
- Handles multiple requests simultaneously
- Great for real-time applications
`;

fs.appendFile(filePath, additionalData, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data appended successfully');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
            } else {
                console.log('Updated File Content:\n', data);
            }
        });
    }
});
