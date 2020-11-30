import getRandomNumber from '../randomNumber.js';

export const gameDescription = 'What is the result of the expression?';

export const calcGame = () => {
  const operators = ['+', '-', '*'];
  let result;
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = operators[getRandomNumber(3)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  switch (operator) {
    case '+':
      result = String(firstNum + secondNum);
      break;
    case '-':
      result = String(firstNum - secondNum);
      break;
    case '*':
      result = String(firstNum * secondNum);
      break;
    default:
      return false;
  }
  return {
    question,
    result,
  };
};
