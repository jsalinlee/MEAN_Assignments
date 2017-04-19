var express     = require("express"),
    bodyParser  = require("body-parser"),
    path        = require("path"),
    mongoose    = require("mongoose");
    app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("Server running on port 8000");
});
