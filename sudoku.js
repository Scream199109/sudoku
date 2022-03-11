let board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(board) {
  function replaceBoard(board){
    let arr = [[],[],[],[],[],[],[],[],[]]
    let string = board.split('') 
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        arr[i].push(string[j + i * 9])
      }
      
    }
    return arr
  }

  board = replaceBoard(board)

  let size = 9
  let boxSize = 3


const findEmpty = (board) => {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
       if(board[r][c] === '-'){
         return [r,c]
       }
    }
    
  }
  return null
}


const validate = (num ,pos ,board) => {
  const [r,c] = pos


  for (let i = 0; i < size; i++) {
    if(board[i][c] === num && i !== r){
      return false
    }
    
  }



  for (let i = 0; i < size; i++) {
    if(board[r][i] === num && i !== c){
      return false
    }
    
  }


  const boxRow = Math.floor(r/boxSize) * boxSize
  const boxCol = Math.floor(c/boxSize) * boxSize


  for (let i = boxRow; i < boxRow + boxSize; i++){
    for (let j = boxCol; j < boxCol + boxSize; j++){
      if(board[i][j] === num && i !== r && j !== c){
        return false
      }    
    }   
  }
  return true
} 





const solve1 = () => {
  const currPos = findEmpty(board)
  if(currPos === null){
    return true
  }

  for (let i = 1; i < size + 1; i++) {
    const curNum = i.toString()
    const isValid = validate(curNum,currPos,board)


    if(isValid){
      const [x,y] = currPos
      board[x][y] = curNum

      if(solve1()){
        return true
      }
      board[x][y] = '-'

    }

  }

}
solve1();
return board;

}
// console.log(input)
// console.log(solve(input))
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
// console.log(prettyBoard(board))
// console.log(board)
console.table(solve(board))