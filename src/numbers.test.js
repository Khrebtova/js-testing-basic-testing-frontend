import { it, expect } from 'vitest';
import { transformToNumber } from './util/numbers';

it('should transform a string to a number', () => {
  const input = '1';
  const result = transformToNumber(input);  
  const expectedResult = parseInt(input);
  expect(result).toBe(expectedResult);
});

// it('should yield NaN if input contains letters', () => {
//     const input = 'a';
//     const result = transformToNumber(input);
//     expect(result).toBeNaN();
// });

it('should throw an error if input contains letters', () => {
    const input = 'a';
    const result = () => transformToNumber(input);
    expect(result).toThrow();
});