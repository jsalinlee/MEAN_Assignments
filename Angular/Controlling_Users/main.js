var controllingApp = angular.module("controllingApp", []);
controllingApp.controller("usersController", function() {

    this.users = [];
    var sort_type = "";
    var sort_reverse = "false"
    this.add = function(data) {
        this.users.push({
            fname: data.fname,
            lname: data.lname,
            favLang: data.favLang
        });
        console.log(data)
    }

    this.delete = function(data) {
        console.log("Made it to the delete function!")
        for(var i = 0; i < this.users.length; i++) {
            if(data == this.users[i]) {
                this.users.splice(i, 1)
            }
        }
    }
});
