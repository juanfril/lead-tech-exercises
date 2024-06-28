import { findWordsInMatrix } from '../exercise-4/findWordsInMatrix'

describe('findWordsInMatrix', () => {
  it('should find words in the matrix', () => {
    const matrix = [
      ['a', 'e', 't', 'l'],
      ['d', 'a', 'e', 'u'],
      ['t', 'e', 'a', 'r'],
      ['c', 'h', 'x', 'g'],
    ]
    const words = [
      'leadtech',
      'notleadtech',
      'potato',
      'anotherCompany',
      'great',
    ]
    const result = findWordsInMatrix(matrix, words)
    expect(result).toEqual(['leadtech', 'great'])
  })

  it('should return an empty array if no words are found', () => {
    const matrix = [
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g', 'h'],
      ['i', 'j', 'k', 'l'],
      ['m', 'n', 'o', 'p'],
    ]
    const words = ['xyz', 'nothing']
    const result = findWordsInMatrix(matrix, words)
    expect(result).toEqual([])
  })

  it('should handle a single letter matrix', () => {
    const matrix = [['a']]
    const words = ['a', 'b']
    const result = findWordsInMatrix(matrix, words)
    expect(result).toEqual(['a'])
  })
})
