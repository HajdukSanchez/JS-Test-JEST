import { getDataFromApi } from '../promise'

describe('Testing Async/Await', () => {
  // This is a test with two validations
  test('Should API request', async () => {
    const API = 'https://rickandmortyapi.com/api/character/'
    const API_GET_CHARACTER = 'https://rickandmortyapi.com/api/character/1'

    await getDataFromApi(API).then((data) => {
      expect(data.results.length).toBeGreaterThan(0)
    })
    await getDataFromApi(API_GET_CHARACTER).then((data) => {
      expect(data.name).toEqual('Rick Sanchez')
    })
  })

  test('Should API request with error', async () => {
    /* This is a URL that gave us the error that we want to receive
    In this case we want a 404 error */
    const API_ERROR = 'http://httpstat.us/404'
    const petition = getDataFromApi(API_ERROR)
    // This test mean that if the test pass, we have a problem in our development
    await expect(petition).rejects.toEqual(Error('Request failed with status code 404'))
  })

  test('Should API request resolve and reject', async () => {
    await expect(Promise.resolve('Hello')).resolves.toBe('Hello')
    await expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})
