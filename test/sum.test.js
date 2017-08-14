import sum from '../src/sum/sum.js';

test('sum two numbers', () => {
    const result = 3;
    expect(sum(1, 2)).toEqual(result)
})
