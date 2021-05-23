// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2], 0,1 -> 0,2 1,2 1,1
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = [] // when n=3 [[],[],[]]
    let counter = 1
    let startRow = 0
    let endRow = n - 1 //2
    let startColumn = 0
    let endColumn = n - 1 //2

    for (let i = 0; i < n; i++) {
        result.push([]) // [[],[],[]]
    }
    while (startColumn <= endColumn && startRow <= endRow) { // 0<=2 && 0<=2 

        //TOP row
        for (let i = startColumn; i <= endColumn; i++) { // i=0 to 2 => 0,1,2
            result[startRow][i] = counter   // result[0][0,1,2] => [[1,2,3],[],[]]
            counter++
        }
        startRow++ // startRow = 1

        //RIGHT COL
        for (let i = startRow; i <= endRow; i++) { // i= 1 to 2 -> (1,2)
            result[i][endColumn] = counter // result[1,2][2]  -> [1,2][2,2] -> result=[[1,2,3],[null,null,4][null,null,5]]
            counter++
        }
        endColumn-- // 1

        //BOTTOM ROW
        for (let i = endColumn; i >= startColumn; i--) { // 1 = 1 to 0
            result[endRow][i] = counter // result[2][1], [2][0] ->  result=[[1,2,3],[null,null,4][7,6,5]]
            counter++
        }
        endRow-- // endRow = 1

        //START COULMN
        for (let i = endRow; i >= startRow; i--) { // i = 1 to 0
            result[i][startColumn] = counter //result[1][0] result[1][1]->  result=[[1,2,3],[8,9,4][7,6,5]]
            counter++
        }
        startColumn++
    }
    return result
}


let result = matrix(3)
console.log(result)
module.exports = matrix;
