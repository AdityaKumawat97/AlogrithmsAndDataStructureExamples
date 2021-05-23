// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//      '   #   '
//      '  ###  '
//      ' ##### ' 
//      '#######'

// function pyramid(n) {
//     let mid = Math.floor(((n * 2) - 1) / 2)
//     for (let row = 0; row < n; row++) {
//         let pyr = ''
//         for (let col = 0; col < (n * 2) - 1; col++) {

//             if (mid - row <= col && mid + row >= col) {
//                 pyr += '#'
//             } else {
//                 pyr += ' '
//             }
//         }
//         console.log(pyr)
//     }
// }

//SOLUTION 2 RECURSION
function pyramid(n, row = 0, pyr = '') {
    if (n === row) {
        return
    }
    if (pyr.length === 2 * n - 1) {
        console.log(pyr)
        return pyramid(n, row + 1)
    }
    let mid = Math.floor(((n * 2) - 1) / 2)
    let add;
    if (mid - row <= pyr.length && mid + row >= pyr.length) {
        add = '#'
    } else {
        add = ' '
    }
    pyramid(n, row, pyr + add)
}
pyramid(3)

module.exports = pyramid;
