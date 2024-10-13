const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.headers);
    res.end("HELLO WORLD");
});
server.listen(8080,()=>{
    console.log("Server started");
});