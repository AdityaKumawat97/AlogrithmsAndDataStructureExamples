// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// SOLUtION 1
// function fib(n) {
//     let smp = [0, 1]
//     let i = 2
//     while (i <= n) {
//         smp[i] = smp[i - 1] + smp[i - 2]
//         i++
//     }
// return smp.pop()
// }

//SOLUTION 2 RECURSION
// function fib(n) { // THIS IS EXPONENTIAL TIME SOLUTION - NEVER USE THIS
//     if (n < 2) {
//         return n
//     }
//     return fib(n - 1) + fib(n - 2)
// }

// SOLUTION 3 MEMOIZATION

//GENERICE MEMOIZE FUNCTION
function memoizer(fn) {
    const cached = {}
    return function (...args) {
        if (cached[args]) {
            return cached[args]
        }

        const result = fn.apply(this, args)
        cached[args] = result

        return result;
    }
}
function SlowFib(n) { // THIS IS EXPONENTIAL TIME SOLUTION - NEVER USE THIS
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}
const fib = memoizer(SlowFib)
let result = fib(15)
console.log(result)
module.exports = fib;
