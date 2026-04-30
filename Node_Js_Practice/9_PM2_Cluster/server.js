const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const workerPid = process.pid;
    
    console.log(`[Request Received] Handled by PID: ${workerPid}`);
    res.send(`Hello! Your request was handled by Process ID: ${workerPid}\n`);
});

app.listen(PORT, () => {
    console.log(`\n[Server Started] Standard Node.js running on Port ${PORT}`);
    console.log(`[Master PID] ${process.pid}`);
    console.log(`Waiting for traffic...\n`);
});