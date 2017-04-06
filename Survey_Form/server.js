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
app.listen("8000", function() {
    console.log("Listening on port 8000");
});
