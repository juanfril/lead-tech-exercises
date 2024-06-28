import { sortByAge } from "./sortByAge"
import { sortByExperience } from "./sortByTotalExperience"

describe('Exercise 3', () => {
  const personDataMock = [
   {
      id: '1',
      name: 'Marta',
      surname: 'Carrillo',
      age: 50,
      profession: [
        { speciality: 'backend programmer', experienceDays: '1500' },
        { speciality: 'backend programmer', experienceDays: '500' },
        { speciality: 'backend programmer', experienceDays: '500' },
      ],
    }, 
    {
      id: '2',
      name: 'Juan Carlos',
      surname: 'Perez',
      age: 44,
      profession: [
        { speciality: 'backend programmer', experienceDays: '125' },
        { speciality: 'frontend programmer', experienceDays: '181' },
      ],
    },
    {
      id: '3',
      name: 'Maria',
      surname: 'Gomez',
      age: 29,
      profession: [
        { speciality: 'fullstack programmer', experienceDays: '365' },
      ],
    },
    
  ]
  it('Sort by age, given an array of persons, return the array sorted by age', () => {
    const sortedByAge = sortByAge(personDataMock)
    expect(sortedByAge[0].id).toBe('3')
    expect(sortedByAge[1].id).toBe('2')
    expect(sortedByAge[2].id).toBe('1')
  })
  it('Sort by total experiencie, given an array of persons, return the array sorted by total experience', () => {
    const sortedByAge = sortByExperience(personDataMock)
    expect(sortedByAge[0].id).toBe('2')
    expect(sortedByAge[1].id).toBe('3')
    expect(sortedByAge[2].id).toBe('1')
  })
})

