import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  let result = '';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
      break;
    }
    else {
      result = 'yes';
    }
  }
  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, isPrime);
