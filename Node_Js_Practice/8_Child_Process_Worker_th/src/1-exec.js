const { exec } = require('child_process');

console.log(`[Parent] Main Node Process PID: ${process.pid}`);

// We use 'dir' on Windows. This asks the shell to list directory contents.
const child = exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    
    console.log('\nEXEC OUTPUT (Buffered all at once into memory)');
    console.log(stdout);
});

console.log(`[Child] Spawned Exec Process PID: ${child.pid}`);