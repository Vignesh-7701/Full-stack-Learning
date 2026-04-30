// test.js
async function blastServer() {
    console.log('Firing 10 concurrent requests at the server...\n');
    
    const requests = [];
    for (let i = 0; i < 10; i++) {
        // We fire 10 fetch requests simultaneously
        requests.push(fetch('http://localhost:3000').then(res => res.text()));
    }

    const responses = await Promise.all(requests);
    
    responses.forEach((res, index) => {
        console.log(`Response ${index + 1}: ${res.trim()}`);
    });
}

blastServer();