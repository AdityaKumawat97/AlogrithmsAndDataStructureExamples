// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// SOLUTION 1

// function anagrams(stringA, stringB) {
//     let cleanStrA = stringA.replace(/[^\w]/g, "").toLowerCase()
//     let cleanStrB = stringB.replace(/[^\w]/g, "").toLowerCase()
//     cleanStrA = cleanStrA.split("").sort().join("")
//     cleanStrB = cleanStrB.split("").sort().join("")
//     return cleanStrA === cleanStrB
// }

// SOLUTION 2 WITH CHAR MAP

function anagrams(stringA, stringB) {
    // creating a helper function to build maps for both strings
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)
    const aKeys = Object.keys(aCharMap).length
    const bKeys = Object.keys(bCharMap).length
    if (aKeys !== bKeys) {
        return false
    }
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        }
    }
    return true
}


function buildCharMap(str) {
    const charMap = {}
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

//SOLUTION 3
// function anagrams(stringA, stringB){

// }
let result = anagrams('hello', 'llohe')
console.log(result)
module.exports = anagrams;
