var pivotNumber = parseInt(process.argv[2]);
var valuesMatrix = [];
var lastValue = 0;

valuesMatrix.push([1]);

while(lastValue < pivotNumber){
    valuesMatrix = createOuterMatrix(valuesMatrix);
    valuesMatrix = calculateEdgeValues(valuesMatrix);
}

function createOuterMatrix(innerMatrix){
    var matrixSize = innerMatrix.length;
    var outerMatrix = [];

    for(i=0;i<matrixSize+2;i++){
        var outerMatrixLine = []; 
        for(j=0;j<matrixSize+2;j++){
            outerMatrixLine.push(0);
        }
        outerMatrix.push(outerMatrixLine);
    }

    for(i=1;i<=matrixSize;i++){
        for(j=1;j<=matrixSize;j++){
            outerMatrix[i][j] = innerMatrix[i-1][j-1];
        }
    }

    return outerMatrix;
}

function calculateEdgeValues(valuesMatrix){
    var matrixSize = valuesMatrix.length;

    valuesMatrix = calculateRightEdge(valuesMatrix, matrixSize);
    valuesMatrix = calculateTopEdge(valuesMatrix, matrixSize);
    valuesMatrix = calculateLeftEdge(valuesMatrix, matrixSize);
    valuesMatrix = calculateBottomEdge(valuesMatrix, matrixSize);
    return valuesMatrix;
}

function calculateRightEdge(valuesMatrix, size){
    for(i=size-2;i>=0;i--){
            valuesMatrix[i][size-1] += valuesMatrix[i+1][size-1];
            valuesMatrix[i][size-1] += valuesMatrix[i+1][size-2];
            valuesMatrix[i][size-1] += valuesMatrix[i][size-2];

            if(valuesMatrix.hasOwnProperty(i-1)) valuesMatrix[i][size-1] += valuesMatrix[i-1][size-2];
            exitApp(valuesMatrix[i][size-1]);
    }
    return valuesMatrix;
}

function calculateLeftEdge(valuesMatrix, size){
    for(i=1;i<size;i++){
        valuesMatrix[i][0] += valuesMatrix[i-1][0];
        valuesMatrix[i][0] += valuesMatrix[i-1][1];
            
        valuesMatrix[i][0] += valuesMatrix[i][1];

        if(valuesMatrix.hasOwnProperty(i+1)){
            valuesMatrix[i][0] += valuesMatrix[i+1][1];
        }
        exitApp(valuesMatrix[i][0]);
    }
    return valuesMatrix;
}

function calculateTopEdge(valuesMatrix, size){
    for(j=size-2;j>=0;j--){
        if(valuesMatrix[0].hasOwnProperty(j+1)){
            valuesMatrix[0][j] += valuesMatrix[0][j+1];
            valuesMatrix[0][j] += valuesMatrix[1][j+1];
        } 

        valuesMatrix[0][j] += valuesMatrix[1][j];

        if(valuesMatrix[0].hasOwnProperty(j-1)){
            valuesMatrix[0][j] += valuesMatrix[0][j-1];
            valuesMatrix[0][j] += valuesMatrix[1][j-1];
        }
        exitApp(valuesMatrix[0][j]);

    }
    return valuesMatrix;
}

function calculateBottomEdge(valuesMatrix, size){
    for(j=1;j<size;j++){
        valuesMatrix[size-1][j] += valuesMatrix[size-1][j-1];
        valuesMatrix[size-1][j] += valuesMatrix[size-2][j-1];

        valuesMatrix[size-1][j] += valuesMatrix[size-2][j];

        if(valuesMatrix[size-1].hasOwnProperty(j+1)){
            valuesMatrix[size-1][j] += valuesMatrix[size-2][j+1];
        } 
        exitApp(valuesMatrix[size-1][j]);
    }
    
    return valuesMatrix;
}

function exitApp(value){
    lastValue = value;

    if(lastValue > pivotNumber){
        console.log("The result is:",lastValue);
        process.exit();
    }
    
}
