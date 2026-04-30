const { parentPort } = require('worker_threads');

// Listen for messages from the Main Thread (The Manager)
parentPort.on('message', (msg) => {
    if (msg === 'START') {
        // Notice we don't log a new PID here, because the PID is the EXACT SAME as the main thread!
        console.log(`[Worker Chef] Starting heavy computation...`);

        // The exact same terrible, CPU-blocking loop
        let sum = 0;
        for (let i = 0; i < 5e9; i++) { // 5 Billion iterations
            sum += i;
        }

        console.log(`[Worker Chef] Computation finished!`);
        
        // Send the final result back to the main thread using the internal memory clone
        parentPort.postMessage({ result: sum });
    }
});