var readline = require('readline');
var fs = require('fs');

var inputFileName = 'input.txt';
var result = 0;

var rl = readline.createInterface({
    input: fs.createReadStream(inputFileName)
});

rl.on('line', function(line){
    result += getEvenDivisionFromLine(line);
});

rl.on('close', function(){
    console.log("Result:",result);
});

function getEvenDivisionFromLine(line){
    var lineValues = line.split(/\s|\t/);
    var lineLength = lineValues.length;
    for(i=0; i < lineLength; i++ ){
        for(j=0; j < lineLength; j++){
            if(j == i) continue;
            var operands = getArrayWithOperands(i,j,lineValues);
            if(Array.max(operands) % Array.min(operands) == 0 ) return Array.max(operands) / Array.min(operands);
        }
    }
    return 0;
}

function getArrayWithOperands(i,j,lineValues){
    var operands = [];
    operands.push(lineValues[i]);
    operands.push(lineValues[j]);
    return operands;
}

Array.max = function(arrayValue){
    return Math.max.apply(this, arrayValue);
}

Array.min = function(arrayValue){
    return Math.min.apply(this, arrayValue);
}