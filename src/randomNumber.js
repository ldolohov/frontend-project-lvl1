const getRandomNumber = (num = 50) => {
  const randomNum = Math.floor(Math.random() * num);
  return randomNum;
};

export default getRandomNumber;
