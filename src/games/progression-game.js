import getRandomNumber from '../randomNumber.js';

export const gameDescription = 'What number is missing in the progression?';

export const progressionGame = () => {
  const arr = [];
  let startNum = getRandomNumber(2);
  const progressNum = getRandomNumber(2, 10);
  for (let i = 0; i < 10; i += 1) {
    arr.push(startNum);
    startNum += progressNum;
  }
  const result = arr[getRandomNumber(0, 9)];
  const indexOfRandom = arr.indexOf(result);
  arr[indexOfRandom] = '..';
  const question = `${arr}`;
  return {
    question,
    result,
  };
};
