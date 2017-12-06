var fs = require('fs');
var inputFile = "inputtest.txt";
var result = 0;

fs.readFile(inputFile, "utf8", function(error, contents){
    result = balanceBank(contents);
    console.log("Result:", result);
});

function balanceBank(memoryBank){
    var hasKnownState = false
    var memoryBlocks = memoryBank.split(/\s|\t/);
    var memoryStates = [];

    memoryBlocks = getIntArray(memoryBlocks);

    while(!hasKnownState){
        var currentPosition = getPositionWithHighestValue(memoryBlocks);
        var balanceSteps = memoryBlocks[currentPosition];
        for(var i=0;i<balanceSteps;i++){
            console.log(balanceSteps)
            currentPosition = getNextPosition(memoryBlocks, currentPosition);
            memoryBlocks[currentPosition] ++;
        }

        hasKnownState =  isKnownState(getMemoryState(memoryBlocks));
        memoryStates.push(getMemoryState(memoryBlocks));
        console.log(memoryStates)
        result++;
    }
}

function isKnownState(states, stateValue){
    if(states.indexOf(stateValue) >=0) return true;

    return false;
}

function getMemoryState(memory){
    var memoryState = "";
    for(var i=0;i<memory.length;i++){
        memoryState.concat(memory[i]);
    }

    return memoryState;
}

function getPositionWithHighestValue(memory){
    var highestValuePosition = 0;
    var highestValue = 0;

    for(var j=0;j<memory.length;j++){
        var currentValue = parseInt(memory[j]);
        if(currentValue > highestValue){
            highestValuePosition = j;
            highestValue = currentValue;
        }
    }

    return highestValuePosition;
}

function getNextPosition(memory,currentPosition){
    if(currentPosition<memory.length){
        return currentPosition + 1;
    }else{
        return 0;
    }
}

function getIntArray(memory){
    var intArray = [];
    
    for(var k =0; k<memory.length; k++){
        intArray.push(parseInt(memory[k]));
    }

    return intArray;
}