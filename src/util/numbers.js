import { validateStringNotEmpty,  validateNumber } from './validation.js';

export function transformToNumber(value) {
  // if(isNaN(value)) {
  //   throw new Error('Invalid input');
  // }
  return +value;
}

export const cleanNumbers = (numberInputs) => {
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers
}