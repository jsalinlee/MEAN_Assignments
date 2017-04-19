var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

module.exports = {
    index: function(req, res) {
        Friend.find({}, function(err, friends) {
            if(err) {
                res.json({ error: "Failed to get all friends!" })
            } else {
                console.log("Successfully get all friends: " + friends);
                res.json({ message: "Success!", friends: friends });
            }
        });
    },

    create: function(req, res) {
        newFriend = new Friend(req.body);
        newFriend.fname = req.body.fname;
        newFriend.lname = req.body.lname;
        newFriend.birthday = req.body.birthday;
        newFriend.save(function(err) {
            if(err) {
                res.json({ error: "Failed to add friend!" });
            } else {
                res.json({ success: "Successfully added new friend to the database!" });
            }
        });
    },

    show: function(req, res) {
        console.log("Checkpoint 1", req.params)
        Friend.findOne({ _id: req.params.id }, function(err, friend) {
            if(err) {
                res.json({ error: "Can't find friend!" });
            } else {
                console.log("Successfully get one friend from the database: " + friend);
                res.json({ success: "Successfully retrieved one friend", friend: friend })
            }
        });
    },

    update: function(req, res) {
        console.log("This is what we're given to edit: ")
        console.log(req.params.id);
        console.log(req.body);
        Friend.update({ _id: req.params.id }, { $set: { fname: req.body.fname, lname: req.body.lname, birthday: req.body.birthday }}, function(err) {
            if(err) {
                res.json({ error: "Failed to update friend!" });
            } else {
                res.json({ success: "Successfully updated friend in the database!" });
            }
        })
    },

    delete: function(req, res) {
        Friend.remove({ _id: req.params.id }, function(err) {
            if(err) {
                res.json({ error: "Failed to delete friend!" });
            } else {
                res.json({ success: "Successfully deleted friend from the database!" });
            }
        });
    }
}
