var friends = require("../data/friends");


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
 
    var Match = {
      name: "",
      photo: "",
      difference: Infinity
    };

    var userData = req.body;
    var userScores = userData.scores;

    var difference;

    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      difference = 0;

      console.log(currentFriend.name);
      

      for (var g = 0; g < currentFriend.scores.length; g++) {
        var currentFriendScore = currentFriend.scores[g];
        var currentUserScore = userScores[g];

        Matchdifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (difference <= Match.difference) {
     
        Match.name = currentFriend.name;
        Match.photo = currentFriend.photo;
        Match.difference = Matchdifference;
      }
    }

    friends.push(userData);
    res.json(Match);
  });
};
