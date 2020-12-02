import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const correctAnswer = (number) => number % 2 === 0;

const isEvenGame = () => {
  const ranNum = getRandomNumber();
  const question = String(ranNum);
  const result = correctAnswer(ranNum) ? 'yes' : 'no';
  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, isEvenGame);
