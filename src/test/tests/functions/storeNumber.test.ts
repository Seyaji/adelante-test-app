import storeNumber from '/Users/alex/Projects/Personal/web3/adelante-test-app/src/functions/storeNumber';

describe('Test for storeNumber function', () => {
  it('should call the function', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    storeNumber("5")
    expect(consoleSpy.mock.calls.length).toBe(1);
  })

})

