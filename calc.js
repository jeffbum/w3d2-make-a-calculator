// var a = 40;
// var b = 110;
//
//
//
// if (a + b === 150){
//     console.log('True.')
// }
//
//
var x
var y
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function divide(x, y) {
    return x / y;
}
function multiply(x, y) {
    return x * y;
}

var answer
answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)
