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

const getRandomArray = function (array) {
  return array.slice(0, getRandomInt(0, array.length));
}

export {getRandomInt, getRandomFloat, getRandomArray};
