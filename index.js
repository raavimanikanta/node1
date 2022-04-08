const http = require("http");
http.createServer(function(request, response){
    response.write("<h1>Hello World</h1>");
    response.write("<p><h1>NodeJs:</h1>Any javascript application can be run only on browser, because to execute JS code we need JS engine that is present only in browsers like Chrome has V8, Explorer has Chakra.But Ryan Dahl, wrote some code using C, C++, Javascript and executed it using V8 engine, this code is now commonly known as Node.JS, this allows us to execute the JS code outside the browser.Node.js is an open-source, cross-platform, JavaScript runtime environment built on Chrome's V8 JavaScript engine that executes JavaScript code outside a web browser </p>");
    // response.write("<h1>Hello Maniknata</h1>");
    let User={name:"manikanta",age:23,college:"pragati",contact:"652485148",dateofjoining:"22-4-2022",email:"manikantavarama@gmail.com"}
    response.write(JSON.stringify(User));
    response.end();
}).listen(3000)
