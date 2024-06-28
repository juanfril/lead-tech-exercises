import { getLibraryData as manualApproach } from '../exercise-2/manualApproach'
import { getLibraryData as promisifyApproach } from '../exercise-2/promisifyApproach'

describe('Manual library wrapper', () => {
  it('Return a message with valid key if key is valid', async () => {
    const libraryData = await manualApproach('valid_key')
    expect(libraryData).toStrictEqual({
      data: 'Library data for key: valid_key',
    })
  })

  it('Return an error message with invalid key', async () => {
    await expect(manualApproach('invalid_key')).rejects.toThrow('Invalid key')
  })
})

describe('Using promisify library wrapper', () => {
  it('Return a message with valid key if key is valid', async () => {
    const libraryData = await promisifyApproach('valid_key')
    expect(libraryData).toStrictEqual({
      data: 'Library data for key: valid_key',
    })
  })

  it('Return an error message with invalid key', async () => {
    await expect(promisifyApproach('invalid_key')).rejects.toThrow(
      'Invalid key',
    )
  })
})
