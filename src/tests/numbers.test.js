import { it, expect, describe } from 'vitest';
import { transformToNumber, cleanNumbers } from '../util/numbers';

describe('transformToNumber()', () => {
  it('should transform a string to a number', () => {
    const input = '1';
    const result = transformToNumber(input);  
    
    expect(result).toBeTypeOf('number');
  });

  it('should transform a string "1" to a number 1', () => {
      const input = '1';
      const result = transformToNumber(input);  
      
      expect(result).toBe(1);
    });


  it('should yield NaN if input is non-transformable', () => {
      const input = 'a';
      const input2 = {};
      const result = transformToNumber(input);
      const result2 = transformToNumber(input2);

      expect(result).toBeNaN();
      expect(result2).toBeNaN();
  });

  // it('should throw an error if input contains letters', () => {
  //     const input = 'a';
  //     const result = () => transformToNumber(input);
  //     expect(result).toThrow();
  // });

});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string numbers is provided', () => {
    const input = ['1', '2', '3'];
    const result = cleanNumbers(input);
    expect(result[0]).toBeTypeOf('number');
    // expect(result).toEqual([1, 2, 3]);
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const input = ['1', '', '3'];
    const result = () => cleanNumbers(input);
    expect(result).toThrow();
  });

  it('should throw an error if an array with at least one non-number string is provided', () => {
    const input = ['1', 'a', '3'];
    const result = () => cleanNumbers(input);
    expect(result).toThrow();
  });

  
});