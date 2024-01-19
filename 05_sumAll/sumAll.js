const sumAll = function(num1, num2) {
    let numeros = 0;
    let numerosArr = []
    let index = num2;
    
    if(typeof(num1) !== "number" || typeof(num2) !== "number") return "ERROR"
    if(num1 < 0 || num2 < 0) return "ERROR"
    if(isNaN(num1) || isNaN(num2)) return "ERROR"
    if(num1 > num2) {
        index = num1;
    }
    for (let i = 0; i < index; i++) {
        numeros++
        numerosArr.push(numeros)
    }
    let total = numerosArr.reduce((a, b) => a + b, 0);
    return total
};

// Do not edit below this line
module.exports = sumAll;
