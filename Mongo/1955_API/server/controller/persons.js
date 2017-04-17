var mongoose = require("mongoose");
var Person = mongoose.model("Person")

module.exports = {
    show: function(req, res) {
        Person.find({}, function(err, persons) {
            res.json(persons)
        });
    },

    create: function(req, res) {
        newPerson = new Person({ name: req.body.name });
        newPerson.save(function(err) {
            if(err) {
                console.log("error");
            } else {
                res.json(persons);
            }
        });
    }
}
