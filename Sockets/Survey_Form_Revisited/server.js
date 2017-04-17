// initialize node server
var express = require("express");
var app = express()
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var postInfo;
// set root to render page with survey form
app.get("/", function(request, response) {
    response.render("index");
});
// get user sent data and send data back
app.post("/result", function(request, response) {
    console.log("Got the post data:", request.body);
    postInfo = request.body;
    response.redirect("/display");
});
app.get("/display", function(request, response) {
    response.render("results", {postInfo: postInfo});
})
// render results
var server = app.listen("8000", function() {
    console.log("Listening on port 8000");
});
var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket) {
    console.log("WE ARE USING SOCKETS!");
    // console.log(socket);
    socket.on("submit_clicked", function(data) {
        var responseObject = {
            "name": data.name,
            "location": data.location,
            "favLanguage": data.favLanguage,
            "comment": data.comment
        }
        console.log(data.name, data.location, data.favLanguage, data.comment);
        socket.emit("updated_message", {response: responseObject});
        socket.emit("random_number", {num: (Math.floor(Math.random() * 1000) + 1)})
    })
})
