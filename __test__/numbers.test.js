import { numbers } from '../numbers'

describe('Numbers comparatives', () => {
  test('Greater than', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3)
  })
  test('Great than or equal to', () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4)
  })
  test('Less than', () => {
    expect(numbers(2, 2)).toBeLessThan(5)
  })
  test('Less than or equal to', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4)
  })
  test('Floating numbers', () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4)
  })
})
