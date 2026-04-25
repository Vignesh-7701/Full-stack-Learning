const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes/userRouter');
const midd = require('./middlewares/demoMiddleware')

//convert json string -> obj
app.use(express.json());

//middleWare
app.use((req , res , next)=>{
    console.log("Request received");
    next();
})

// Keeping Middleware in separate folder. 
app.use(midd.demoMidd);  

//router
app.use('/users' , router)

//static
//http://localhost:3001/index.html
app.use('/static' , express.static('public'));

//custom error
app.use('/error' , (req, res , next) => {
    throw new Error("I'm Custom error.")
})

// async error
app.use('/async-error' , (req , res , next) => {
    try{
        throw new Error("Async Error")
    }
    catch(err){
        next(err);
    }
})

// Error Handling MiddleWare
app.use((err , req , res , next) => {
    console.log(err.message);
    res.status(500).json({Message : err.message})
    next();
})

app.use((req , res ) => {
    console.log("I'm last one");
    
})

// Global error handler
process.on('uncaughtException', (err) => {
    console.log("Unhandled Error:", err.message);
});



//If port is busy..
const port = parseInt(process.env.PORT);

function startServer(p){
    const server = app.listen(p , ()=>{
         console.log(`Server running on port ${p}`);
    })
    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${p} busy, trying ${p + 1}`);
            startServer(p + 1);   // try next port
        } else {
            console.error(err);
        }
    });
}

startServer(port);