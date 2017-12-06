var readline = require('readline');
var fs = require('fs');

var inputFileName = 'inputtest.txt';
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
            if(isAnagram(words[i],words[j])) return false;
        }
    }

    return true;
}

function isAnagram(firstWord, secondWord){
    if(firstWord.length != secondWord.length) return false;

    var wordLen = firstWord.length;
    var secondLetters = secondWord.split('');
    
    for(k=0;k<wordLen;k++){
        for(l=0;l<wordLen;l++){
            if(firstWord.charAt(k) == secondLetters[l]){
                secondLetters.splice(l,1);
                break;
            }
        }
    } 

    if(secondLetters.length == 0){
        return true;
    }else{
        return false;
    }
}