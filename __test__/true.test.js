import { isTrue, isFalse, isNull, isUndefined } from '../true'

// We can create one describe per test
describe('Null results', () => {
  test('Null', () => {
    expect(isNull()).toBeNull()
  })
})
describe('True results', () => {
  test('True', () => {
    expect(isTrue()).toBeTruthy()
  })
})
describe('False results', () => {
  test('False', () => {
    expect(isFalse()).toBeFalsy()
  })
})
describe('Undefined results', () => {
  test('Undefined', () => {
    expect(isUndefined()).toBeUndefined()
  })
})
