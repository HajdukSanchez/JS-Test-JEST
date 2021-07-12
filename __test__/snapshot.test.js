import { getCharacter } from '../snapshot'
// We create this object for simulate something that we have for an API request
import rick from '../rick.json' // Fake API data

describe('Snapshot test', () => {
  test('Should Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
    // We need to run the test for generate a snapshot
  })

  test('Should Snapshot always fail', () => {
    // This test always has a fail because her value is not constant
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20), // Random element 0-19
    }
    /* expect(user).toMatchSnapshot() */
  })

  test('Should Snapshot with exceptions', () => {
    const user = {
      id: Math.floor(Math.random() * 20), // Dynamic value
      name: 'Jozek Hajduk', // Static value
    }
    expect(user).toMatchSnapshot({
      /* We tell that we don't matter the ID Value */
      id: expect.any(Number), // Here be generate the exception
    })
  })
})
