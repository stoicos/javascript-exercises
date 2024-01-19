const reverseString = function(word) {
    let letters = [...word];
    letters.reverse()
    let reverseLetters = letters.join('')
    return reverseLetters
};

// Do not edit below this line
module.exports = reverseString;
