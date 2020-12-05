import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const getCorrectAnswer = () => {
  const operators = ['+', '-', '*'];
  let result;
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length)];
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
      break;
  }
  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, getCorrectAnswer);
