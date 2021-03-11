
import {bookObjects, TYPES, CHECKINS, FEATURES, PHOTOS} from './data.js';
import {getRandomInt, getRandomFloat, getRandomArray} from './util.js';


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

