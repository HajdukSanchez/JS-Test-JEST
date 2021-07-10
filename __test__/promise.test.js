import { getDataFromApi } from '../promise'

describe('Testing promises', () => {
  test('Should API request', (done) => {
    const URL = 'https://rickandmortyapi.com/api/character/'
    getDataFromApi(URL).then((data) => {
      expect(data.results.length).toBeGreaterThan(0)
      // We use DONE because this is a async request, so when the request is done, JEST is going to make the comparative
      done()
    })
  })

  test('Should resolved', () => {
    return expect(Promise.resolve('Hello')).resolves.toBe('Hello')
  })

  test('Should rejected', () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})
