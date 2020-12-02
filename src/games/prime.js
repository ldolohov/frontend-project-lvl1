import getRandomNumber from '../randomNumber.js';
import playGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = () => {
  const num = getRandomNumber();
  const question = String(num);
  const result = isPrime(num) ? 'yes' : 'no';

  return {
    question,
    result,
  };
};

export default () => playGame(gameDescription, getAnswer);
