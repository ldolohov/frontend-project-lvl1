import readlineSync from 'readline-sync';
import userName from '../greetings.js';
import getRandomNumber from '../randomNumber.js';

console.log(`Hello, ${userName}!`);

const numberOfRounds = 3;

const correctAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < numberOfRounds; i += 1) {
    const ranNum = getRandomNumber();
    const correct = correctAnswer(ranNum);
    console.log(`Question: ${ranNum}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (correct !== gamerAnswer) {
      return console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}.`);
    }
    console.log('Correct');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default isEvenGame;
