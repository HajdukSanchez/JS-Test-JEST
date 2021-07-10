import { getCharacter } from '../snapshot'
// We create this object for simulate something that we have for an API request
import rick from '../rick.json' // Fake API data

describe('Snapshot test', () => {
  test('Should Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
    // We need to run the test for generate a snapshot
  })
})
