var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var messages = [];
var users = [];

app.get("/", function(request, response) {
    response.render("index")
});

var server = app.listen("8000", function() {
    console.log("Listening on port 8000")
});
var io = require("socket.io").listen(server)

io.sockets.on("connection", function(socket) {
    io.emit("new_user", {id: socket.id});
    socket.on("send_message", function(data) {
        messages.push(data.message);
        
        io.emit("message_sent", { messages: messages, name: data.name });
    })
});
