const http = require ("http");
const port = 8081;
http.createServer((req, res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h2>Hey you got your server..</h2>")
    res.end();
})
.listen(port,()=>{
    console.log(`Hey your server located at port ${port}`)
})