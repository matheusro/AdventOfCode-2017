var fs = require('fs');
var inputFile = "input.txt";

fs.readFile(inputFile, "utf8", function(error, contents){
    result = balanceBank(contents);
    console.log("Result:", result);
});

function balanceBank(memoryBank){
    var hasKnownState = false
    var memoryBlocks = memoryBank.split(/\s|\t/);
    var memoryStates = [];
    var result = 0;

    memoryBlocks = getIntArray(memoryBlocks);

    while(!hasKnownState){
        var currentPosition = getPositionWithHighestValue(memoryBlocks);
        var balanceSteps = memoryBlocks[currentPosition];
        memoryBlocks[currentPosition] = 0;
        
        for(var i=0;i<balanceSteps;i++){
            currentPosition = getNextPosition(memoryBlocks, currentPosition);
            memoryBlocks[currentPosition] ++;            
        }
        
        hasKnownState =  isKnownState(memoryStates, getMemoryState(memoryBlocks));
        memoryStates.push(getMemoryState(memoryBlocks));
    }
    return result;
}

function isKnownState(states, stateValue){
    if(states.indexOf(stateValue) >=0) return true;

    return false;
}

function getMemoryState(memory){
    var memoryState = "";
    for(var i=0;i<memory.length;i++){        
        memoryState += " " + memory[i];
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
    if(currentPosition < memory.length-1){
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