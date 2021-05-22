// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1 
// function reverse1(str) {
//     return str.split('').reverse().join('')
// }
// let revString = reverse1('adi')
// console.log(revString)

//SOLUTION 2
// function reverse(str) {
//     let reversedString;
//     for (let char of str) {
//         reversedString = char + reversedString
//     }
//     return reversedString
// }
// let revString = reverse('adi')
// console.log(revString)

//SOLUTION 3 --with reduce helper
function reverse(str) {
    return str.split('').reduce((reversedString, char) => reversedString = char + reversedString, '')
}
let revString = reverse('abcdef')
console.log(revString)
module.exports = reverse;
