var mongoose = require("mongoose");
var User = mongoose.model("User");
module.exports = {

    show: function(req, res) {
        User.find({}, function(err, users) {
            res.render("quotes", { users: users });
        });
    },

    create: function(req, res) {
        newUser = new User(req.body);
        newUser.name = req.body.name;
        newUser.quote = req.body.quote;
        newUser.save(function(err) {
            if(err) {
                res.render("index", { errors: newUser.errors });
            } else {
                res.redirect("/quotes");
            }
        });
    }
}
