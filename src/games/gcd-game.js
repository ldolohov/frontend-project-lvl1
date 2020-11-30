import getRandomNumber from '../randomNumber.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export const gameGcd = () => {
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
