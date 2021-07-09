// After each test
afterEach(() => console.log('After each test'))
afterAll(() => console.log('After all the tests'))

// Before each tests
beforeEach(() => console.log('Before each test'))
beforeAll(() => console.log('Before all the tests'))

describe('Prepare before execute', () => {
  test('Is true', () => {
    expect(true).toBeTruthy()
  })
})
