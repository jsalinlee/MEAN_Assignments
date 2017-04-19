var mongoose = require("mongoose");
var Model = mongoose.model("Model");

module.exports = {
    index: function(req, res) {
        Model.find({}, function(err, result) {
            if(err) {
                res.json({ error: "Error." })
            } else {
                res.json({ message: "Success!", result: result });
            }
        });
    },

    create: function(req, res) {
        newModel = new Model(req.body);
        newModel.fname = req.body.fname;
        newModel.lname = req.body.lname;
        newModel.birthday = req.body.birthday;
        newModel.save(function(err) {
            if(err) {
                res.json({ error: "Error." });
            } else {
                res.json({ success: "Success!" });
            }
        });
    },

    show: function(req, res) {
        Model.findOne({ _id: req.params.id }, function(err, result) {
            if(err) {
                res.json({ error: "Error." });
            } else {
                res.json({ success: "Success!", result: result })
            }
        });
    },

    update: function(req, res) {
        Model.update({ _id: req.params.id }, { $set: { fname: req.body.fname, lname: req.body.lname, birthday: req.body.birthday }}, function(err) {
            if(err) {
                res.json({ error: "Error." });
            } else {
                res.json({ success: "Success!" });
            }
        })
    },

    delete: function(req, res) {
        Model.remove({ _id: req.params.id }, function(err) {
            if(err) {
                res.json({ error: "Error" });
            } else {
                res.json({ success: "Success!" });
            }
        });
    }
}
