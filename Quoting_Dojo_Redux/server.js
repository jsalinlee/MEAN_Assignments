var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/basic_mongoose");
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema( {
    name: { type: String,
        required: [true, "Please enter a name."],
        minlength: [2, "Name must be at least 2 characters!"]},
    quote: { type: String, required: [true, "Please enter a quote."],
        minlength: [10, "Quote must be at least 10 characters!"]} },
    { timestamps: true });

mongoose.model("User", UserSchema);
var User = mongoose.model("User");

app.get("/", function(request, response) {
    User.find({}, function(err, users) {
        console.log(users);
    });
    response.render("index");
});

app.post("/quotes", function(request,response) {
    // console.log(request.body);
    newUser = new User(request.body);
    newUser.name = request.body.name;
    newUser.quote = request.body.quote;
    newUser.save(function(err) {
        if(err) {
            response.render("index", { errors: newUser.errors });
        } else {
            response.redirect("/quotes");
        }
    });
});

app.get("/quotes", function(request, response) {
    console.log("Made it to the quotes page!")
    User.find({}, function(err, users) {
        response.render("quotes", { users: users });
    });
});

app.listen("8000", function() {
    console.log("Listening on port 8000");
});
