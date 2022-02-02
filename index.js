// Question :  Check Tic Tac Toe Input ( 2D Array )
//             if X win        return X
//             if O win        return O
//             if draw         return draw
//             if not complete return null
//             X = 1 , O = 2

// Array Loop Method 

const CheckTTT = () =>{

    // Check Input
    if(arrTicTacToe.length !== 3) return null
    for(let i = 0; i < 3; i++){ if(arrTicTacToe[i].includes(undefined)) return null}

    // Manage Array
    let winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4,6 ]]
    let singleArray = [...arrTicTacToe[0], ...arrTicTacToe[1], ...arrTicTacToe[2]]
    
    // CheckWin
    let check1 = winCondition.some((condition)=> condition.every((index)=>singleArray[index] === 1))
    let check2 = winCondition.some((condition)=> condition.every((index)=>singleArray[index] === 2))

    // Return Result
    if(check1) return 'X'
    if(check2) return 'Y'
    return 'draw'
}

let arrTicTacToe = [[1, 2, 0],[0, 1, 2],[0, 0, 1]]
console.log(CheckTTT(arrTicTacToe))

// Hard Code Method

const checkTTT = (arr) => {
    let arrCheck = false
    let winner = null

    if(arr.length !== 3) return null

    let arr1 = arr[0]
    let arr2 = arr[1]
    let arr3 = arr[2]

    // Check Game State finish or not
    if(arr1.length === 3 && !arr1.includes(undefined)){
        if(arr2.length === 3 && !arr2.includes(undefined)){
            if(arr3.length ===  3 && !arr3.includes(undefined)){
                arrCheck = true
            }
        }
    }

    // WinCondition Check X

    // Horizon Check
    if (arr1[0] === 1 && arr1[1] === 1 && arr1[2] === 1) winner = 'X'
    else if (arr2[0] === 1 && arr2[1] === 1 && arr2[2] === 1) winner = 'X'
    else if (arr3[0] === 1 && arr3[1] === 1 && arr3[2] === 1) winner = 'X'

    // Vertical Check
    else if (arr1[0] === 1 && arr2[0] === 1 && arr3[0] === 1) winner = 'X'
    else if (arr1[1] === 1 && arr2[1] === 1 && arr3[1] === 1) winner = 'X'
    else if (arr1[2] === 1 && arr2[2] === 1 && arr3[2] === 1) winner = 'X'

    // Extra Check
    else if (arr1[0] === 1 && arr2[1] === 1 && arr3[2] === 1) winner = 'X'
    else if (arr1[2] === 1 && arr2[1] === 1 && arr3[0] === 1) winner = 'X'

    // WinCondition Check O

    // Horizon Check
    else if (arr1[0] === 2 && arr1[1] === 2 && arr1[2] === 2) winner = 'O'
    else if (arr2[0] === 2 && arr2[1] === 2 && arr2[2] === 2) winner = 'O'
    else if (arr3[0] === 2 && arr3[1] === 2 && arr3[2] === 2) winner = 'O'

    // Vertical Check
    else if (arr1[0] === 2 && arr2[0] === 2 && arr3[0] === 2) winner = 'O'
    else if (arr1[1] === 2 && arr2[1] === 2 && arr3[1] === 2) winner = 'O'
    else if (arr1[2] === 2 && arr2[2] === 2 && arr3[2] === 2) winner = 'O'

    // Extra Check
    else if (arr1[0] === 2 && arr2[1] === 2 && arr3[2] === 2) winner = 'O'
    else if (arr1[2] === 2 && arr2[1] === 2 && arr3[0] === 2) winner = 'O'

    // If Game not complete...
    if(!arrCheck) return null

    // If Someone Win
    if(winner) return winner

    return 'draw'
}

let arrTicTacToe = [[1, 2, 0],[0, 1, 2],[0, 0, 1]]
console.log(checkTTT(arrTicTacToe))