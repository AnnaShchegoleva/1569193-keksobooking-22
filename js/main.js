let returnRandomInt = function (from, to) {
  if (to < 0 || from < 0) {
    return 0;
  } else {
    return Math.round(from + Math.random() * (to + 1 - from));
  }
};

let returnRandomFloat = function (from, to) {
  return from + Math.random() * (to + 1 - from);
};

returnRandomInt(2,5);
returnRandomFloat(-1, -20);

