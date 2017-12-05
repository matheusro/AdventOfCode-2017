var readline = require('readline');
var fs = require('fs');

var inputFileName = 'input.txt';
var listEntries = [];
var result = 0;

var rl = readline.createInterface({
    input: fs.createReadStream(inputFileName)
});

rl.on('line', function(line){
    listEntries.push(parseInt(line));
});

rl.on('close', function(){
    jumpFromList();
    console.log("Result:",result);
});

function jumpFromList(){
    var currentIndex = 0;

    while(currentIndex >= 0 && currentIndex < listEntries.length ){
        currentIndex = moveStep(currentIndex);
        result++;
    }
}

function moveStep(currentIndex){
    var stepToIndex = currentIndex + listEntries[currentIndex];
    if(listEntries[currentIndex] >= 3){
        listEntries[currentIndex]--;
    }else{
        listEntries[currentIndex]++;
    }
    
    return stepToIndex;
}