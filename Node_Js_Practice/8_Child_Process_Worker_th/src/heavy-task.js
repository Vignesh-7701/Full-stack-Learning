// src/heavy-task.js
process.on('message', (msg) => {
    if (msg === 'START') {
        console.log(`[Child ${process.pid}] Starting heavy computation...`);

        // A deliberately terrible, CPU-blocking loop.
        let sum = 0;
        for (let i = 0; i < 5e9; i++) { // 5 Billion iterations
            sum += i;
        }

        console.log(`[Child ${process.pid}] Computation finished!`);
        
        // Send the final result back to the parent over the IPC channel
        process.send({ result: sum });
        
        // Kill this child process so it doesn't become a zombie in memory
        process.exit();
    }
});