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

const authors =[];
const offers =[];
const locations =[];
const types =['palace', 'flat', 'house', 'bungalow'];
const checkins = ['12:00', '13:00', '14:00'];
const features =['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos =['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


for (let i = 0; i < 10; i++) {
  const AUTHOR = {
    avatar: 'img/avatars/user0' + getRandomInt(1, 8) + '.png',
  }

  const LOCATION ={
    x: getRandomFloat(35.65000, 35.70000),
    y: getRandomFloat(139.70000, 139.80000),
  }

  const OFFER = {
    title: 'Предложение о бронировании ' + '#' + getRandomInt(1, 10),
    address: LOCATION.x +','+ LOCATION.y,
    price: getRandomInt(0, 7000),
    type: types[getRandomInt(0, 3)],
    rooms: getRandomInt(0, 20),
    guests: getRandomInt(0, 100),
    checkin: checkins[getRandomInt(0, 2)],
    checkout: checkins[getRandomInt(0, 2)],
    features: Array(getRandomInt(1, 5)),
    description: '',
    photos: Array(getRandomInt(1, 3)),
  }

  OFFER.features = features.slice(0, OFFER.features.length - 1);
  OFFER.photos = photos.slice(0, OFFER.photos.length - 1);
  OFFER.description = ('Апартаменты представляют собой ' + OFFER.type + ' и включают ' + OFFER.rooms + ' комнат. В них может разместится до ' + OFFER.guests + ' гостей. Дополнительные услуги ' + OFFER.features.join(', '));
  authors.push(AUTHOR);
  offers.push(OFFER);
  locations.push(LOCATION);
}
