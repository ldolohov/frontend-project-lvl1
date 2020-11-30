import getRandomNumber from '../randomNumber.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

export const isEvenGame = () => {
  const ranNum = getRandomNumber();
  const correct = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const question = `${ranNum}`;
  const result = correct(ranNum);
  return {
    question,
    result,
  };
};
