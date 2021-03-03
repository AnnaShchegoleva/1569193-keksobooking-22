const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const bookObjects =[];

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

for (let i = 0; i < 10; i++) {
  const author = {
    avatar: 'img/avatars/user0' + getRandomInt(1, 8) + '.png',
  }

  const location = {
    x: getRandomFloat(35.65000, 35.70000),
    y: getRandomFloat(139.70000, 139.80000),
  }

  const offer = {
    title: 'Предложение о бронировании ' + '#' + getRandomInt(1, 10),
    address: location.x +','+ location.y,
    price: getRandomInt(0, 7000),
    type: TYPES[getRandomInt(0, 3)],
    rooms: getRandomInt(0, 20),
    guests: getRandomInt(0, 70),
    checkin: CHECKINS[getRandomInt(0, 2)],
    checkout: CHECKINS[getRandomInt(0, 2)],
    features: getRandomArray(FEATURES),
    description: '',
    photos: getRandomArray(PHOTOS),
  }

  offer.description = ('Апартаменты представляют собой ' + offer.type + ' и включают ' + offer.rooms + ' комнат. В них может разместится до ' + offer.guests + ' гостей. Дополнительные услуги ' + offer.features.join(', '));

  const bookObject = {
    author: author,
    offer: offer,
    location: location,
  }

  bookObjects.push(bookObject);
}

//console.log(BOOKOBJECTS);
