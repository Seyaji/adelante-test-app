import getBalance from '/Users/alex/Projects/Personal/web3/adelante-test-app/src/functions/getBalance';

describe('Test for getBalance function', () => {
  it('should call the function', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    getBalance()
    expect(consoleSpy.mock.calls.length).toBe(1);
  })

})

