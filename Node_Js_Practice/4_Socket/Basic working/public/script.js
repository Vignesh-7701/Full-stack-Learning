// io(url) - emits connect event
const socket = io('http://localhost:3000');

socket.on('welcome' , data => {console.log(data)
    socket.emit('thanks' , "Thank you..!");
})