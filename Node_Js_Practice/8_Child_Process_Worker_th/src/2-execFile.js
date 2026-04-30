const { execFile } = require('child_process');

console.log(`[Parent] Main Node Process PID: ${process.pid}`);

// Execute the 'node' binary directly, without a shell.
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    
    console.log('\nEXECFILE OUTPUT (Buffered all at once)');
    console.log(`Node Version: ${stdout.trim()}`);
});

console.log(`[Child] Spawned ExecFile Process PID: ${child.pid}`);