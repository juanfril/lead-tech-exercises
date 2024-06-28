import { matrix, words } from './inputs'

const isValid = (matrix, visited, row, col) =>
  row >= 0 &&
  col >= 0 &&
  row < matrix.length &&
  col < matrix[0].length &&
  !visited[row][col]

const searchWord = (matrix, word, index, row, col, visited) => {
  if (index === word.length) return true
  if (!isValid(matrix, visited, row, col) || matrix[row][col] !== word[index])
    return false

  visited[row][col] = true

  const rowOffsets = [-1, -1, -1, 0, 0, 1, 1, 1]
  const colOffsets = [-1, 0, 1, -1, 1, -1, 0, 1]

  for (let i = 0; i < rowOffsets.length; i++) {
    const newRow = row + rowOffsets[i]
    const newCol = col + colOffsets[i]
    if (searchWord(matrix, word, index + 1, newRow, newCol, visited)) {
      return true
    }
  }

  visited[row][col] = false
  return false
}

export const findWordsInMatrix = (matrix, words) => {
  const foundWords = []

  words.forEach((word) => {
    let wordFound = false
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        const visited = Array.from({ length: matrix.length }, () =>
          Array(matrix[0].length).fill(false),
        )
        if (searchWord(matrix, word, 0, row, col, visited)) {
          foundWords.push(word)
          wordFound = true
          break
        }
      }
      if (wordFound) break
    }
  })

  return foundWords
}

const result = findWordsInMatrix(matrix, words)
console.log(result)
