import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const playGame = (rules, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`'Hello, ${name}'!`);
  console.log(`${rules}`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { question, result } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== result) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
