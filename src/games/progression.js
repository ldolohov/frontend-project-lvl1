import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const progressionGame = () => {
  const arr = [];
  let startNum = getRandomNumber(2);
  const progressNum = getRandomNumber(2, 10);
  const hiddenElement = getRandomNumber(0, 9);
  for (let i = 0; i < 10; i += 1) {
    arr.push(i === hiddenElement ? '..' : i * progressNum + startNum);
  }
  const result = String(hiddenElement * progressNum + startNum);
  const question = arr.join(' ');
  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, progressionGame);
