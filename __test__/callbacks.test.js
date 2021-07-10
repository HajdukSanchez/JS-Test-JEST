import { callbackHell } from '../callbacks'

describe('Testing a callback', () => {
  test('Callback', (done) => {
    function otherCallback(data) {
      expect(data).toBe('Hello JS')
      done()
    }
    callbackHell(otherCallback)
  })
})
