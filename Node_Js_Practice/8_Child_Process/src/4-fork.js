// src/4-fork.js
const { fork } = require('child_process');
const path = require('path');

console.log(`[Parent] Main Node Process PID: ${process.pid}`);

// Fork creates a brand new V8 instance and opens an IPC channel
const childPath = path.join(__dirname, 'heavy-task.js');
const child = fork(childPath);

console.log(`[Child] Forked Process PID: ${child.pid}\n`);

// 1. Send a message over the IPC channel to trigger the calculation
child.send('START');

// 2. Listen for the result coming back from the child
child.on('message', (msg) => {
    console.log(`\n[Parent] Received result from child: ${msg.result}`);
});

// 3. THE PROOF: A heartbeat interval. 
// If the main thread was blocked by the math, this interval would freeze.
const heartbeat = setInterval(() => {
    console.log('[Parent] Event Loop is ticking... ready to serve other users!');
}, 500);

// Clean up the interval when the child is done so the program can exit
child.on('exit', () => {
    clearInterval(heartbeat);
    console.log('Parent process exiting cleanly.');
});