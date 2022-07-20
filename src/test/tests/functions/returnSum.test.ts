import returnSum from '/Users/alex/Projects/Personal/web3/adelante-test-app/src/functions/returnSum';

describe('Test for returnSum function', () => {
  it('should call the function', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    returnSum("5", "5")
    expect(consoleSpy.mock.calls.length).toBe(1);
  })

})

