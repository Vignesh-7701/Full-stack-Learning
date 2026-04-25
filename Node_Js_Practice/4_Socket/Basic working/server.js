const express = require('express');
const app = express();

console.log(process.env);

app.use(express.static('public'))
const exServer = app.listen(3000 , ()=> console.log("Port 3000 connected"));

const socketio = require('socket.io');

const io = socketio(exServer , { } );

io.on('connect' , socket => {console.log(socket.id , " joined");
    socket.emit('welcome' , "you are welcome");
    socket.on('thanks' , data => {console.log(data);
    })
} ) 

