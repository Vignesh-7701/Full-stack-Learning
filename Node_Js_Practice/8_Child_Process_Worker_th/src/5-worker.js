// src/5-worker.js
const { Worker } = require('worker_threads');
const path = require('path');

console.log(`[Main Thread Manager] Process PID: ${process.pid}`);
console.log('Starting execution timer...\n');
console.time('Worker_Thread_Duration');

// We hire a new Worker Thread (2nd Chef) to run our task script
const workerPath = path.join(__dirname, 'worker-task.js');
const worker = new Worker(workerPath);

// 1. Send a message to the worker to trigger the calculation
worker.postMessage('START');

// 2. Listen for the result coming back from the worker
worker.on('message', (msg) => {
    console.log(`\n[Main Thread Manager] Received result from worker: ${msg.result}`);
    console.timeEnd('Worker_Thread_Duration');
    
    // Once the job is done, we fire the worker to free up the memory
    worker.terminate();
});

worker.on('error', (err) => {
    console.error(`Worker error: ${err}`);
});

// 3. THE PROOF: A heartbeat interval. 
// If the main thread was blocked by the math, this interval would freeze.
const heartbeat = setInterval(() => {
    console.log('[Main Thread Manager] Event Loop is ticking... ready to serve other users!');
}, 500);

// Clean up the interval when the worker is terminated so the program can exit
worker.on('exit', () => {
    clearInterval(heartbeat);
    console.log('Main thread exiting cleanly.');
});