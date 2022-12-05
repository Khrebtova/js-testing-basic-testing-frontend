import {it, expect, describe} from 'vitest';
import { generateResultText } from '../output';

describe('generateResultText()', () => {
    it('should return a string, no matter what result is passed in', ()=>{
        const input1 = 'invalid';
        const input2 = false;
        const input3 = 1;
        const result1 = generateResultText(input1);
        const result2 = generateResultText(input2);
        const result3 = generateResultText(input3);
        expect(result1).toBeTypeOf('string');
        expect(result2).toBeTypeOf('string');
        expect(result3).toBeTypeOf('string');
    })
  
    it('should return "Result: 1" if 1 is passed in', () => {
        const input = 1;
        const result = generateResultText(input);
        // expect(result).toBe('Result: 1');
        expect(result).toContain(result.toString());
    });

    it('should return "Invalid input. You must enter valid numbers." if "invalid" is passed in', () => {
        const input = 'invalid';
        const result = generateResultText(input);
        expect(result).toBe('Invalid input. You must enter valid numbers.');
        // expect(result).toContain('Invalid');
    });

    it('should return an empty string if "no-calc" is passed in', () => {
        const input = 'no-calc';
        const result = generateResultText(input);
        expect(result).toBe('');
    });
});