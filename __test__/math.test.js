// We import our functions for testing
import { sum, multiply, rest, divide } from '../math'

// We need to add a description for our test
describe('Mathematical operations', () => {
  // we add a description for a specific test
  test('Addition test', () => {
    // To be parameter is the expected output of the test
    expect(sum(1, 1)).toBe(2)
  })
  test('Multiplication test', () => {
    expect(multiply(3, 4)).toBe(12)
  })
  test('Subtraction test', () => {
    expect(rest(4, 2)).toBe(2)
  })
  test('Divider test', () => {
    expect(divide(3, 3)).toBe(1)
  })
})
