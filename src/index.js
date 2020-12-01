import readlineSync from 'readline-sync';
import userName from './greetings.js';

const gameFlow = (rules, getGameData) => {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = userName();
  console.log(`${rules}`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { question, result } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(result)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameFlow;
