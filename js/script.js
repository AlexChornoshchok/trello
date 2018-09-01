(function () {

  // var  listCardsHTML = `
  //   <div class="header"> <h4> Tital </h4> </div>
  //   <div class="footer" onclick = "addCard()"> Add card</div>
  //   `;

  var  listCardsHTML = function(groupName) {
    return `
      <div class="header"> <h4> Tital </h4> </div>
      <div class="footer" onclick = "addCard('${groupName}')"> Add card</div>
    `;
  }
    
  // var defaultCard = '<div class = "card">Card</div>';
  var defaultCard = document.createElement('div');
  defaultCard.className = "card";
  defaultCard.draggable = true;
  defaultCard.ondragstart = function(event){
    console.log(event);

  }
  // defaultCard.innerText = "Card"; 
  defaultCard.innerHTML = `
    <div class="card">
        <div class="card-header">
           <progress max="100" value="10">Progress bar</progress>
           <span>X</span>
        </div>
        <div class = "card-title">
          <h4>Tital</h4>
        </div>
        <div class = "card-footer">
          <button class = "card-edit">
            ...
          </button> 
          <div class = "card-status">  
          </div> 
            <div class = "card-date"> Date </div>       
              <img class = "card-img" src="" alt="avatar">
            </div>    
          </div>
    </div>      
    `;
 
  // var group = document.getElementsByClassName('group')[0];
  // group.innerHTML = listCardsHTML;
  var group1 = document.getElementsByClassName('group-1')[0];
  group1.innerHTML = listCardsHTML('group-1');
  var group2 = document.getElementsByClassName('group-2')[0];
  group2.innerHTML = listCardsHTML('group-2');
  //var listCards = document.getElementsByClassName('card');

  window.addCard = function (type) {
    console.log(type);
    let group = document.getElementsByClassName(type)[0];
    console.log(group.outerHTML);
    let listCards = group.outerHTML;
    console.log(listCards instanceof Array);
   // console.log(listCards);
    listCards.splice(listCards.length - 1, 0, defaultCard);
    group.innerHTML = listCards;
  //  listCardsHTML.splice(listCardsHTML.length - 1, 0, defaultCard);
  //group.innerHTML = listCardsHTML;
  };

  window.cardDrop = function(event) {
    console.log(event);
  
  };

  window.onDragOver = function(event) {
    event.preventDefault();

  };
}());