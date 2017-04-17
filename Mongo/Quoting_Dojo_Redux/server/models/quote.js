var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema( {
    name: { type: String,
        required: [true, "Please enter a name."],
        minlength: [2, "Name must be at least 2 characters!"]},
    quote: { type: String, required: [true, "Please enter a quote."],
        minlength: [10, "Quote must be at least 10 characters!"]} },
    { timestamps: true });
mongoose.model("User", UserSchema);
