import { personData } from './personData'

const calculateTotalExperience = (professionArray) => {
  return professionArray.reduce(
    (total, profession) => total + parseInt(profession.experienceDays, 10),
    0,
  )
}

export const sortByExperience = (array) => {
  let len = array.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (
        calculateTotalExperience(array[j].profession) >
        calculateTotalExperience(array[j + 1].profession)
      ) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

const sortedByExperience = sortByExperience(personData)
console.log(sortedByExperience)
