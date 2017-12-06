var readline = require('readline');
var fs = require('fs');

var inputFileName = 'input.txt';
var validPassphrases = 0;

var rl = readline.createInterface({
    input: fs.createReadStream(inputFileName)
});

rl.on('line', function(line){
    if(isValidPassphrase(line)) validPassphrases++;
});

rl.on('close', function(){
    console.log("Result:", validPassphrases);
});

function isValidPassphrase(passphrase){
    var words = passphrase.split(/\s|\t/);
    var passphraseSize = words.length;

    for(i=0;i<passphraseSize-1;i++){
        for(j=i+1;j<=passphraseSize-1;j++){
            if(words[i] == words[j]) return false;
        }
    }

    return true;
}