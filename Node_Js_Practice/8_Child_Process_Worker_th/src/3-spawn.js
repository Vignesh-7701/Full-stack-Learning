const { spawn } = require('child_process');

console.log(`[Parent] Main Node Process PID: ${process.pid}`);

// 'ping' is perfect for testing streaming. '-n 5' tells Windows to ping 5 times.
const child = spawn('ping', ['google.com', '-n', '5']);

console.log(`[Child] Spawned Spawn Process PID: ${child.pid}\n`);

// Listen to the 'data' event on the standard output stream.
// This is where we catch the tiny chunks as they flow in!
child.stdout.on('data', (chunk) => {
    console.log(`[STREAM CHUNK RECEIVED]: ${chunk.toString().trim()}`);
});

child.on('close', (code) => {
    console.log(`\nChild process exited securely with code ${code}`);
});