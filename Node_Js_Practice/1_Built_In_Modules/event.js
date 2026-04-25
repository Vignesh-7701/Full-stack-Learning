const event = require("events");

const eventEmitter = new event(); // need an instance remember

eventEmitter.on("log" , ()=>{
    console.log("Received Log");
})

eventEmitter.emit("log");