export const generateResultText  = (result) => {
    let resultText = '';
    if (result === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
      } else if (result !== 'no-calc') {
        resultText = 'Result: ' + result;
      }
    return resultText;
}

export const outputResult = (resultText) =>{
    const element = document.getElementById('result');
    element.textContent = resultText;
}