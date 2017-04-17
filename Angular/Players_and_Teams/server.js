var express     = require("express"),
    bodyParser  = require("body-parser"),
    path        = require("path"),
    app         = express();
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bodyParser.json());
app.listen(8000, function() {
    console.log("server running on port 8000");
})
