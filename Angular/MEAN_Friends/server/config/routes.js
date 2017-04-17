var mongoose = require("mongoose");

module.exports = function(app) {
    console.log("future routes");
    app.get("/", function(req, res) {
        res.render("index");
    })
}
