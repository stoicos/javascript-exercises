const repeatString = function(word, repeat) {
    let repeatedString = '';
    if (repeat < 0) {
        return 'ERROR'
    }
    for(let i = 0; i < repeat; i++) {
        repeatedString = repeatedString + word;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
