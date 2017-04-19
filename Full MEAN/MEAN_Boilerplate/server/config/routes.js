var path = require("path");
var boilerController = require("../controllers/boilerController.js");

module.exports = function(app) {
    app.get("/boiler", boilerController.index);
    app.get("/boiler/:id", boilerController.show);
    app.post("/boiler", boilerController.create);
    app.put("/boiler/:id", boilerController.update);
    app.delete("/boiler/:id", boilerController.delete);
}
