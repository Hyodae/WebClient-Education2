/*
    @TODO
    node http 모듈을 사용해 기본 http 서버를 구성하라.
*/
var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type" : "text/html"
    });

    response.write("Hello World");
    response.end();
}).listen(3000);