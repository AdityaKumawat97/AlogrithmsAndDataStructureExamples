// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const n = new Map()
    let max = 0
    let maxChar = ''

    str.split('')
    for (let i = 0; i < str.length; i++) {
        if (!n.has(str[i])) {
            n.set(str[i], 1)
        } else {
            n.set(str[i], n.get(str[i]) + 1)
        }
    }
    n.forEach((v, k) => {
        if (n.get(k) > max) {
            max = v
            maxChar = k
        }
    })
    return maxChar
}
let a = maxChar('aaddbbccc')
console.log(a)
module.exports = maxChar;
