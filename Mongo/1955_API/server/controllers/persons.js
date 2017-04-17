var mongoose = require("mongoose");
var Person = mongoose.model("Person")

module.exports = {
    show: function(req, res) {
        Person.find({}, function(err, persons) {
            res.json(persons)
        });
    }
}
