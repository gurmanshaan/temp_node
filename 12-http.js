const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page');
    }
    else if(req.url === '/about'){
        res.end("this is about page");
    }
    else {
    res.end(`
    <h1>Oops!</h1>
    <p>this is not the page you are looking for</p>
    <a href="/">back to home</a>
    `)
}})
// req ->request from client 
// res -> response from server

server.listen(5001);
