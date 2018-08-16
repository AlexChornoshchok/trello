(function () {
  let listCardsHTML = [
    '<div class="header"> Header</div>',
    '<div class="footer"> Footer</div>'
  ];
  const defaultCard = '<div class="card">Card</div>';
  defaultCard.className = 'card';
  const group = document.getElementsByClassName('group')[0];
  group.innerHTML = listCardsHTML;
  // const listCards = document.getElementsByClassName('card');

  window.addCard = function () {
    listCardsHTML.splice(listCardsHTML.length - 1, 0, defaultCard);
    group.innerHTML = listCardsHTML;
    // listCards.insertBefore(defaultCard, listCards.lastChild);
  };
}());
