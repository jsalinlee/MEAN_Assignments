var mongoose = require("mongoose");

var FriendSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true }
});

mongoose.model("Friend", FriendSchema);
