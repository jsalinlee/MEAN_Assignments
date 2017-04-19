var mongoose = require("mongoose");
var Friend = mongoose.model("Friend")

module.exports = {
    index: function(req, res) {
        Friend.find({}, function(err, friends) {
            if(err) {
                res.json({ error: "Error!" });
            } else {
                console.log(friends);
                res.json(friends);
            }
        });
    },
    show: function(req, res) {
        res.json({ show: "show" })
    },
    create: function(req, res) {
        var friend = new Meerkat(req.body);
        friend.fname = req.body.fname;
        friend.lname = req.body.lname;
        res.json({ create: "create" });
    },
    update: function(req, res) {
        res.json({ update: "update" });
    },
    delete: function(req, res) {
        res.json({ delete: "delete" });
    }
}
