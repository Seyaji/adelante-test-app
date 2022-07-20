import hello from '/Users/alex/Projects/Personal/web3/adelante-test-app/src/functions/hello';

describe('Test for hello function', () => {
  it('should call the function', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    hello()
    expect(consoleSpy.mock.calls.length).toBe(1);
  })

})

