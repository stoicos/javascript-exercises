const palindromes = function (word) {
    if (word.split('').reverse().join('').toString().toLowerCase().replace(/[^a-z0-9]/g, "") === word.split('').join('').toString().toLowerCase().replace(/[^a-z0-9]/g, "")) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
