

let createCard = (book, cardTemplate) => {
  let cardContainer = document.createDocumentFragment();
  let cardItem = cardTemplate.cloneNode(true);
  cardItem.querySelector('.popup__title').textContent = book.offer.title;
  cardItem.querySelector('.popup__text--address').textContent = book.offer.address;
  cardItem.querySelector('.popup__text--price').textContent = book.offer.price + ' ₽/ночь';
  cardItem.querySelector('.popup__type').textContent = book.offer.type;
  cardItem.querySelector('.popup__text--capacity').textContent = book.offer.rooms +' комнаты для '+ book.offer.guests + ' гостей';
  cardItem.querySelector('.popup__text--time').textContent = 'Заезд после ' + book.offer.checkin + ', выезд до ' + book.offer.checkout;

  cardItem.querySelector('.popup__description').textContent = book.offer.description;

  let featuresElements = cardItem.getElementsByClassName('popup__feature');
  for (let i = 0; i < featuresElements.length; i++) {
    let exist = false;
    for (let j = 0; j < book.offer.features.length; j++) {
      if (featuresElements[i].className.includes(book.offer.features[j])) {
        exist = true;
      }
    }
    if (!exist) {featuresElements[i].classList.add('hidden');}
  }
  let photos = cardItem.querySelector('.popup__photos');
  let imgTag = cardItem.querySelector('.popup__photo');
  book.offer.photos.forEach((photo) => {
    let newImg = imgTag.cloneNode();
    newImg.src = photo;
    photos.appendChild(newImg);
  })
  imgTag.classList.add('hidden');
  cardContainer.appendChild(cardItem);

  return cardContainer;
}

export {createCard};
