import getRandomNumber from '../randomNumber.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  let result = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
    }
  }
  return {
    question,
    result,
  };
};
