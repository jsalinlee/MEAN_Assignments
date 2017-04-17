var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set ("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var count = 0;

app.get("/", function(request, response) {
    response.render("index");
});

var server = app.listen("6789", function() {
    console.log("Listening on port 6789")
})
var io = require("socket.io").listen(server);
io.sockets.on("connection", function(socket) {
    socket.on("epic_clicked", function(data) {
        count++;
        io.emit("updated_count", { count: count });
    });
    socket.on("reset_clicked", function(data) {
        count = 0;
        io.emit("reset_count", { count: count });
    });
})
