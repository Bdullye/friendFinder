//Path dependency.

var path = require("path");

module.exports = function(app){
//HTML GET requests
//Sends data when survey is visited
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found send user to default home.
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};