import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const maxFirstNum = 2;
const minStep = 2;
const maxStep = 5;
const maxLength = 10;

const defineProgression = () => {
  const arr = [];
  const startNum = getRandomNumber(maxFirstNum);
  const progressNum = getRandomNumber(minStep, maxStep);
  const hiddenElement = getRandomNumber(0, maxLength - 1);
  for (let i = 0; i < maxLength; i += 1) {
    arr.push(i === hiddenElement ? '..' : i * progressNum + startNum);
  }
  const result = String(hiddenElement * progressNum + startNum);
  const question = arr.join(' ');
  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, defineProgression);
