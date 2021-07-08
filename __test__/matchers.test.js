describe('Common matchers', () => {
  const user = {
    name: 'Jozek',
    lastName: 'Hajduk',
  }
  const user2 = {
    name: 'Jozek',
    lastName: 'Hajduk',
  }

  test('Equals elements', () => {
    expect(user).toEqual(user2)
  })

  /* test('Not equals elements', () => {
    expect(user).not.toEqual(user2)
  }) */
})
