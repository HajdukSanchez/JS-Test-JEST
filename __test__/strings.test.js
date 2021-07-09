describe('Strings block chains', () => {
  const text = 'A beautiful text'
  test('Should contain the text', () => {
    expect(text).toMatch(/beautiful/) // This is a regular expression
  })
  test('Should not contain the text', () => {
    expect(text).not.toMatch(/test/)
  })
  test('Should have length', () => {
    expect(text).toHaveLength(16) // This length need to be exact
  })
})
