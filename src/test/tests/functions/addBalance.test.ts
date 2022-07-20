import addBalance from '/Users/alex/Projects/Personal/web3/adelante-test-app/src/functions/addBalance';

describe('Test for addBalance function', () => {
  it('should call the function', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    addBalance()
    expect(consoleSpy.mock.calls.length).toBe(1);
  })

})

