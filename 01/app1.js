var fs = require('fs');
var input_file = "";
var result = 0;

fs.readFile("input.txt", "utf8", function(error, contents){
    if(error){
        return console.log(error);
    }

    input_file = contents;
    var input_len = input_file.length;

    if(input_file.charAt(0) == input_file.charAt(input_len - 1)) result += parseInt(input_file.charAt(0));

    for (var i = 1; i < input_len; i++) {
        if(input_file.charAt(i) == input_file.charAt(i - 1)) result += parseInt(input_file.charAt(i));
    }
    console.log("Part 1: " + result);
});