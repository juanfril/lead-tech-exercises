import { personData } from './personData'

export const sortByAge = (array) => {
  let len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j].age > array[j + 1].age) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

const sortedByAge = sortByAge(personData)
console.log(sortedByAge)
