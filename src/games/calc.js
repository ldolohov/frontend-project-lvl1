import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calcGame = () => {
  const operators = ['+', '-', '*'];
  let result;
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = operators[Math.floor(Math.random() * 3)];
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

export default () => playGame(gameDescription, calcGame);
