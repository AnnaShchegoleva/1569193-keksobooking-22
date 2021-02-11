const getRandomInt = function (from, to) {
  if (to < 0 || from < 0) {
    return null;
  } else {
    return Math.round(from + Math.random() * (to + 1 - from));
  }
};

const getRandomFloat = function (from, to) {
  return from + Math.random() * (to + 1 - from);
};

getRandomInt(2, 5);
getRandomFloat(-1, -20);

