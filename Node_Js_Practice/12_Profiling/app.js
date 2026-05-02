// app.js
const express = require('express');
const crypto = require('crypto'); // Built-in Node.js module

const app = express();
const PORT = 3000;

// Route 1: The Fast Route
app.get('/fast', (req, res) => {
    res.status(200).send('This route is lightning fast!');
});

// Route 2: The Bottleneck (CPU-Blocking)
// We give the function a name: "heavyCryptoRoute"
app.get('/slow', function heavyCryptoRoute(req, res) {
    console.log('Heavy CPU work started...');
    
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync('myPassword', salt, 500000, 512, 'sha512');
    
    console.log('Heavy CPU work finished.');
    res.status(200).send(`Work complete. Hash: ${hash.toString('hex').substring(0, 15)}...`);
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});