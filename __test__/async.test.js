import { getDataFromApi } from '../promise'

describe('Testing Async/Await', () => {
  // This is a test with two validations
  test('Should API Request', async () => {
    const API = 'https://rickandmortyapi.com/api/character/'
    const API_GET_CHARACTER = 'https://rickandmortyapi.com/api/character/1'

    await getDataFromApi(API).then((data) => {
      expect(data.results.length).toBeGreaterThan(0)
    })
    await getDataFromApi(API_GET_CHARACTER).then((data) => {
      expect(data.name).toEqual('Rick Sanchez')
    })
  })
})
