var pivotNumber = parseInt(process.argv[2]);

//the next bottom left corner is the square of the next 
var nextBottomLeft = 1;
var nextNumberOfElements = 1;
var base =1;
var edgeSize;
var edgeCenter;

while(nextBottomLeft < pivotNumber){
    base += 2;
    nextBottomLeft = Math.pow(base,2);
    numberOfElements = (base-2)*4+4;
    edgeSize = numberOfElements / 4;
    edgeCenter = Math.floor(edgeSize/2);
}

//find position in the edge
for(i=1;i<=4;i++){
    var pivotDistance = nextBottomLeft - pivotNumber;
    var pivotPosition = numberOfElements - pivotDistance;
    
    if( pivotPosition <= edgeSize*i){
        var distanceToCenter = pivotPosition - edgeCenter - (edgeSize*(i-1));
        break;
    }
}

var x = distanceToCenter;
var y = edgeCenter;

var movecount = 0;
while(x>0 || y>0){
    if(x>0){
        movecount++;
        x--;
    }

    if(x<0){
        movecount++;
        x++;
    }

    if(y>0){
        movecount++;
        y--;
    }
}

console.log(movecount);