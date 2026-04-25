const http = require('http');
const { json } = require('stream/consumers');
const url = require('url');

const users = [
    { id: 1, name: "Viki", age: 25 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Sara", age: 22 }
]

const server = http.createServer((req , res) => {
    const parsedUrl = url.parse(req.url , true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    // ROUTE PARAMETER
    // /user/1

    if(req.method === 'GET' && path.startsWith('/user/')){
        const id = path.split('/')[2]; // extract id
        const user = users.find(u => u.id == id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
    }

    //http://localhost:3000/users?id=1
    
    else if(req.method === 'GET' && path === '/users' ){
        const id  = query.id;
        const user = users.find(u => u.id == id);
        res.writeHead(200 , {'content-type' : 'application/json'});
        res.end(JSON.stringify(user));
    }
    else{
        res.end("Error");
    }
})

server.listen(3000 , ()=> console.log("Port Started on 3000")
)