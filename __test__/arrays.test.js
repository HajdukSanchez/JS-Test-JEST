import { arrayColors, arrayFruits } from '../arrays'

describe('Array content a specific element', () => {
  test('Contains banana ?', () => {
    expect(arrayFruits()).toContain('banana')
  })
  test('Not contains platano ?', () => {
    expect(arrayFruits()).not.toContain('platano')
  })
  test('Array length', () => {
    expect(arrayFruits()).toHaveLength(6)
  })
  test('Contains a color', () => {
    expect(arrayColors()).toContain('red')
  })
})
