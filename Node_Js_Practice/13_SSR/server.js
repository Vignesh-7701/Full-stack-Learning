const express = require('express');
const app = express();
const PORT = 3000;

// Tell Express to use EJS as the default templating engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// The SSR Route
app.get('/', (req, res) => {
    
    // Simulating a database call that returns an array of objects
    const fakeDatabaseResponse = [
        { level: 'INFO', message: 'Server started successfully on port 3000.' },
        { level: 'WARN', message: 'High memory usage detected in cluster.' },
        { level: 'ERROR', message: 'Redis distributed lock timeout.' }
    ];

    // 1. We create the data object we want to inject into the HTML
    const dataForTemplate = {
        pageTitle: 'My SSR App',
        serverMessage: 'Hello from the backend! This text was written before the browser even loaded.',
        timestamp: new Date().toLocaleTimeString(),
        systemLogs: fakeDatabaseResponse
    };

    // 2. We tell Express to find 'index.ejs' in the views folder, 
    // inject the data object into it, and send the final HTML to the user.
    /*
    By default, the Express res.render() function is hardcoded to look inside a 
    folder named exactly views located in the root directory of your project.
    */

    res.render('index', dataForTemplate);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});