var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/meerkat_dashboard");
mongoose.Promise = global.Promise;

var MeerkatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rank: {type: String, required: true }
});

mongoose.model("Meerkat", MeerkatSchema);
var Meerkat = mongoose.model("Meerkat");

app.get("/", function(request, response) {
    Meerkat.find({}, function(err, meerkats) {
        console.log(meerkats);
        response.render("index", { meerkats: meerkats });
    });
});

app.get("/meerkats/new", function(request, response) {
    response.render("meerkats");
});

app.post("/meerkats", function(request, response) {
    console.log(request.body);
    var meerkat = new Meerkat(request.body);
    meerkat.name = request.body.name;
    meerkat.rank = request.body.rank;
    meerkat.save(function(err) {
        if(err) {
            response.render("index", { errors: meerkat.errors });
        } else {
            response.redirect("/");
        }
    });
});

app.get("/meerkats/:id", function(request, response) {
    console.log(request.params.id)
    Meerkat.findOne({ _id: request.params.id }, function(err, meerkat) {
        console.log(meerkat);
        response.render("meerkat", { meerkat: meerkat });
    });
});

app.get("/meerkats/edit/:id", function(request, response) {
    Meerkat.findOne({_id: request.params.id }, function(err, meerkat) {
        response.render("editKat", { meerkat: meerkat });
    });
});

app.post("/meerkats/:id", function(request, response) {
    Meerkat.update({_id: request.params.id }, { $set: { name: request.body.name, rank: request.body.rank }}, function(err) {
        if(err) {
            response.render("editKat", { errors: meerkat.errors });
        } else {
            response.redirect("/");
        }
    });
});

app.post("/meerkats/destroy/:id", function(request, response) {
    Meerkat.remove({_id: request.params.id }, function(err) {
        if(err) {
            response.render("editKat", { errors: meerkat.errors });
        } else {
            response.redirect("/");
        }
    });
});

app.listen(8000, function() {
    console.log("Listening on port 8000");
});
