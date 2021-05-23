// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//SOLUTION 1

// function capitalize(str) {
//     let words = []
//     for (word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     words = words.join(" ")
//     return words
// }


//SOLUTION 2
function capitalize(str) {
    // iterate over string and check the element in its left if it is a space then capitalize
    // the current element and append it to result

    let result = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }

    return result
}

let res = capitalize('a short sentence')
console.log(res)
module.exports = capitalize;
