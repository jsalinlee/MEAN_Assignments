var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/message_board");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    user: { type: String, requiered: [true, "Please enter your name"], minlength: [4, "Name must be at least 4 characters."] },
    text: { type: String, required: [true , "Please enter a message."] },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
}, { timestamps: true });

var CommentSchema = new mongoose.Schema({
    _message: { type: Schema.Types.ObjectId, ref: "Message" },
    user: { type: String, requiered: [true, "Please enter your name"], minlength: [4, "Name must be at least 4 characters."] },
    text: { type: String, required: [true , "Please enter a comment."] }
}, { timestamps: true });

mongoose.model("Message", MessageSchema);
mongoose.model("Comment", CommentSchema);

var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");

app.get("/", function(request, response) {
    // Message.remove({}, function(err){});
    Message.find({})
    .populate("comments")
    .exec(function(err, message) {
        console.log(message)
        response.render("index", { message: message });
    });
});

app.post("/post_message", function(request, response) {
    // console.log(request.body);
    newMessage = new Message();
    newMessage.user = request.body.name;
    newMessage.text = request.body.message;
    newMessage.save(function(err) {
        if(err) {
            Message.find({})
            .populate("comments")
            .exec(function(err, message) {
                console.log(message)
                response.render("index", { message: message, errors: newMessage.errors });
            });
        } else {
            response.redirect("/");
        }
    });
});

app.post("/post_comment/:id", function(request, response) {
    Message.findOne({_id: request.params.id }, function(err, message) {
        console.log("This is the message that was commented on: " + message);
        var newComment = new Comment(request.body);
        newComment._message = message._id;
        newComment.user = request.body.cName;
        newComment.text = request.body.comment;
        message.comments.push(newComment);
        newComment.save(function(err) {
            if(err){
                Message.find({})
                .populate("comments")
                .exec(function(err, message) {
                    response.render("index", { message: message, errors: newComment.errors });
                });
            } else {
                message.save(function(err) {
                    if(err) {
                        console.log("Error");
                        response.redirect("/");
                    } else {
                        response.redirect("/");
                    }
                });
            }
        });
    });
});

app.listen(8000, function() {
    console.log("Listening on port 8000")
});
