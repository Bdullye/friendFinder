//Create ROUTES.

var friends = require("../data/friends");
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        if(friends.length < 0) {
            friends.push(req.body);
            res.json(true);
        }
        else {
            //friends.push(req.body);
            //res.json(false);
            var bestFriend = {
                name: '',
                url: '',
                diff: 100
            };
            var userData = req.body;
            var scores = userData.scores;
            for (var i = 0; i < friends.length; i++){
                var possibleFriend = friends[i];
                diff = 0;
                var friendScores = possibleFriend.scores;
                for(var j = 0; j< scores; j++){
                    diff += Math.abs(scores[j] - friendScores[j])
                }
                if (diff<bestFriend.diff){
                    bestFriend = possibleFriend
                    bestFriend.diff = diff
                }
            }
            res.json(bestFriend);
        }
    });
}

