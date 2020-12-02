import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  let firstNum = getRandomNumber();
  let secondNum = getRandomNumber();
  const question = `${firstNum} ${secondNum}`;
  let temp;
  while ((firstNum % secondNum) > 0) {
    temp = firstNum % secondNum;
    firstNum = secondNum;
    secondNum = temp;
  }
  const result = String(secondNum);
  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, gameGcd);
