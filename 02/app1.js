var readline = require('readline');
var fs = require('fs');

var inputFileName = 'input.txt';
var result = 0;

var rl = readline.createInterface({
    input: fs.createReadStream(inputFileName)
});

rl.on('line', function(line){
    result += getDifferenceFromLine(line);
});

rl.on('close', function(){
    console.log("Result:",result);
});

function getDifferenceFromLine(line){
    var lineValues = line.split(/\s|\t/);
    return Array.max(lineValues) - Array.mix(lineValues);
}

Array.max = function(arrayValue){
    return Math.max.apply(this, arrayValue);
}

Array.mix = function(arrayValue){
    return Math.min.apply(this, arrayValue);
}