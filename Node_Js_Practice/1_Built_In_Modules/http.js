const http = require('http');

const server = http.createServer((req , res) => {
    if(req.method === "GET" && req.url === "/get-post"){
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(
            response => response.json()).then(
                data => {
                    res.writeHead(200 , {"content-type" : "application/json"});
                    res.end(JSON.stringify(data));
                })
    }

    else if (req.method === "POST" && req.url === "/create-post") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const postData = JSON.parse(body);

            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {

                res.writeHead(201, {"Content-Type": "application/json"});
                res.end(JSON.stringify(data));

            });

        });

    }

    else{
        res.writeHead(404);
        res.end("Route Not Found");
    }
})

server.listen(3000 , ()=>{
    console.log("Server Running at Port - 3000");
})

