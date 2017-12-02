var fs = require('fs');
var inputFile = "";
var inputLen = 0;
var result = 0;

fs.readFile("input.txt", "utf8", function(error, contents){
    if(error){
        return console.log(error);
    }

    inputFile = contents;
    inputLen = inputFile.length;

    for (var i = 0; i < inputLen; i++) {
        var halfwayPos = halfwayPosition(inputLen, i);
        if(inputFile.charAt(i) == inputFile.charAt(halfwayPos)) result += parseInt(inputFile.charAt(i));
    }
    console.log(result);
});

function halfwayPosition(inputLen, inputPos){    
    var halfway = (inputLen / 2);

    if(inputPos > halfway - 1){
        return inputPos - halfway; 
    }else{
        return inputPos + halfway;
    }

}