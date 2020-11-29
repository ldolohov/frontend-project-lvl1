import getRandomNumber from '../randomNumber.js';

const calcGame = () => {
  const operators = ['+', '-', '*'];
  let result = 0;
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = operators[getRandomNumber(3)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  switch(operator) {
    case '+' :
       result = String(firstNum + secondNum);
       break;
    case '-' :
      result = String(firstNum - secondNum);
      break;
    case '*' :
      result = String(firstNum * secondNum);
      break;
  }
  return {
    question,
    result
  }
}
