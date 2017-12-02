var fs = require('fs');
var inputFile = "";
var result = 0;

fs.readFile("input.txt", "utf8", function(error, contents){
    if(error){
        return console.log(error);
    }

    inputFile = contents;
    var inputLen = inputFile.length;

    if(inputFile.charAt(0) == inputFile.charAt(inputLen - 1)) result += parseInt(inputFile.charAt(0));

    for (var i = 1; i < inputLen; i++) {
        if(inputFile.charAt(i) == inputFile.charAt(i - 1)) result += parseInt(inputFile.charAt(i));
    }
    console.log(result);
});