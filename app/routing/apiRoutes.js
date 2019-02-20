var data = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(data);
    });
    
    app.post("/api/friends", function(req, res){
        var newInput = req.body;
        var firendData = friendFinding(newInput, data);
        res.json(data[firendData]);
        data.push(newInput);
    });
};



//function for matching  

var questionNumber = 10;

function friendFinding(input, frinedArray){

    var difference = [0, 100];

    for(var i = 0; i < frinedArray.length; i++){

        var result = 0;

        for(var j = 0; j < questionNumber; j++){
            result += Math.abs(parseInt(input.scores[j])-parseInt(frinedArray[i].scores[j]));
        };

        if(difference[1] > result){
            difference[0]=i;
            difference[1]=result;
        }
    };
    return difference[0];


}