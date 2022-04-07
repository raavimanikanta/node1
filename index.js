const http = require("http");
http.createServer(function(request, response){
    response.write("<h1>Hello</h1>");
    response.write("<h1>Node Js</h1>");
    response.write("<h1>Hello Maniknata</h1>");
    let User={name:"manikanta",age:23,college:"pragati"}
    response.write(JSON.stringify(User));
    response.end();
}).listen(3000)
