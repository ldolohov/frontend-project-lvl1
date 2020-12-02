import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const defineCommonDivider = (firstNum, secondNum) => {
  let temp;
  let first = firstNum;
  let second = secondNum;
  while ((first % second) > 0) {
    temp = first % second;
    first = second;
    second = temp;
  }
  return second;
};

const getAnswer = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const question = `${firstNum} ${secondNum}`;
  const result = String(defineCommonDivider(firstNum, secondNum));

  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, getAnswer);
