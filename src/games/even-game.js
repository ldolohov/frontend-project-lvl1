import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEvenGame = () => {
  const ranNum = getRandomNumber();
  const correct = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const question = `${ranNum}`;
  const result = correct(ranNum);
  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, isEvenGame);
