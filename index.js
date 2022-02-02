// Question :  Check Tic Tac Toe Input ( 2D Array )
//             if X win        return X
//             if O win        return O
//             if draw         return draw
//             if not complete return null
//             X = 1 , O = 2

const checkTTT = (arr1, arr2, arr3) => {
    let arrCheck = false
    let winner = null

    // Check Game State finish or not
    if(arr1.length === 3){
        if(arr2.length === 3){
            if(arr3.length ===  3){
                arrCheck = true
            }
        }
    }

    // WinCondition Check X

    // Horizon Check
    if (arr1[0] === 1 && arr1[1] === 1 && arr1[2] === 1) winner = 'X'
    if (arr2[0] === 1 && arr2[1] === 1 && arr2[2] === 1) winner = 'X'
    if (arr3[0] === 1 && arr3[1] === 1 && arr3[2] === 1) winner = 'X'

    // Vertical Check
    if (arr1[0] === 1 && arr2[0] === 1 && arr3[0] === 1) winner = 'X'
    if (arr1[1] === 1 && arr2[1] === 1 && arr3[1] === 1) winner = 'X'
    if (arr1[2] === 1 && arr2[2] === 1 && arr3[2] === 1) winner = 'X'

    // Extra Check
    if (arr1[0] === 1 && arr2[1] === 1 && arr3[2] === 1) winner = 'X'
    if (arr1[2] === 1 && arr2[1] === 1 && arr3[0] === 1) winner = 'X'

    // WinCondition Check O

    // Horizon Check
    if (arr1[0] === 2 && arr1[1] === 2 && arr1[2] === 2) winner = 'O'
    if (arr2[0] === 2 && arr2[1] === 2 && arr2[2] === 2) winner = 'O'
    if (arr3[0] === 2 && arr3[1] === 2 && arr3[2] === 2) winner = 'O'

    // Vertical Check
    if (arr1[0] === 2 && arr2[0] === 2 && arr3[0] === 2) winner = 'O'
    if (arr1[1] === 2 && arr2[1] === 2 && arr3[1] === 2) winner = 'O'
    if (arr1[2] === 2 && arr2[2] === 2 && arr3[2] === 2) winner = 'O'

    // Extra Check
    if (arr1[0] === 2 && arr2[1] === 2 && arr3[2] === 2) winner = 'O'
    if (arr1[2] === 2 && arr2[1] === 2 && arr3[0] === 2) winner = 'O'

    // If Game not complete...
    if(!arrCheck) return null

    // If Someone Win
    if(winner) return winner

    return 'draw'
}

let arr1 = [2, 0, 0]
let arr2 = [0, 0, 1]
let arr3 = [1, 0, 2]

console.log(checkTTT(arr1, arr2, arr3))