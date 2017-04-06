var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response) {
    console.log("client is requesting URL: " + request.url);
    if(request.url === "/") {
        fs.readFile("views/index.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end()
        })
    } else if(request.url === "/cars") {
        fs.readFile("views/cars.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end()
        });
    } else if(request.url === "/cats") {
        fs.readFile("views/cats.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    } else if(request.url === "/stylesheets") {
        fs.readFile("stylesheets/skeleton.css", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-type": "text/css"});
            response.write(contents);
            response.end();
        });
    } else if(request.url === "/images/car") {
        fs.readFile("images/car1.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    } else if(request.url === "/images/cat") {
        fs.readFile("images/cat1.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    } else if(request.url === "/cars/new") {
        fs.readFile("views/cats.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end("File not found!");
    }
});

server.listen(7077);
