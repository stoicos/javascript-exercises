const leapYears = function(year) {

    if(year % 400 === 0) return true

    if(year % 100 === 0) return false

    if(year % 4 === 0) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;

/*
Los años bisiestos son años divisibles por cuatro (como 1984 y 2004). Sin embargo, los años divisibles por 100 no son años bisiestos (como 1800 y 1900) a menos que sean divisibles por 400 (como 1600 y 2000, que de hecho fueron años bisiestos). (Sí, todo es bastante confuso)


*/