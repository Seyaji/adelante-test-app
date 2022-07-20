import withdrawBalance from '/Users/alex/Projects/Personal/web3/adelante-test-app/src/functions/withdrawBalance';

describe('Test for withdrawBalance function', () => {
  it('should call the function', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    withdrawBalance("1.00")
    expect(consoleSpy.mock.calls.length).toBe(1);
  })

})

