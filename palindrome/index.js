// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//SOLUTION 1
// function palindrome(str) {
//     let reversedString = str.split('').reverse().join('')
//     return reversedString === str
// }
// console.log(palindrome('abba'))

//SOLUTION 2
function palindrome(str) {
    return str.split('').every((char, idx) => {
        return char === str[str.length - idx - 1]
    })
}
console.log(palindrome('abba'))
module.exports = palindrome;
