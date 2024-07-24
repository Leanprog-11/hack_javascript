/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let numbers = [1,3,5,7];
let result = numbers.filter(num => num % 2 !== 0);

console.log(result);
//export result
module.exports = result;