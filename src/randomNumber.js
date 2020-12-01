const getRandomNumber = (start = 0, end = 50) => {
  const randomNum = Math.floor(Math.random() * (end - start) + start);
  return randomNum;
};

export default getRandomNumber;
