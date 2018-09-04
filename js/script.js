;(function () {

  var LIST_CARD_HTML = function() {
    return `
      <div class="header"> <h4> Title </h4> </div>
      <div class="footer" onclick = "addCard(this)"> Add card</div>
    `;
  };
  
  var id = 1;
  var dragCard;
  var dropCard;

  
  window.onDragStart = function(event){
    dragCard = event.toElement;
  };

  window.groupDrop = function(event) {
    dropGroup = event.toElement;
    while(dropGroup.className != "group") {
      dropGroup = dropGroup.parentNode;
    };
    console.log("dropGroup", dropGroup);
    dropGroup.insertBefore(dragCard, dropGroup.lastElementChild);
  };

  window.cardDrop = function(event) {
    dropCard = event.toElement;
    while(dropCard.className != "card") {
      dropCard = dropCard.parentNode;
    };
    dragDropCard(dragCard,dropCard);
    event.stopPropagation();
  };

  window.onDragOver = function(event) {
    event.preventDefault();
  };

  var getDefaultCard = function() {
    var DEFAULT_CARD = document.createElement('div');
    DEFAULT_CARD.className = "card";
    DEFAULT_CARD.draggable = true;
    DEFAULT_CARD.ondragstart = onDragStart;
    DEFAULT_CARD.ondrop = cardDrop; 
    DEFAULT_CARD.ondragover = onDragOver;
    DEFAULT_CARD.innerHTML = `
          <div class="card-header">
             <progress max="100" value="10">Progress bar</progress>
             <span  onclick = "removeCard(this)">X</span>
          </div>
          <div class = "card-title">
            <h4>Title</h4>
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
      `;
      return DEFAULT_CARD;
  };

  function getDefaultGroup () {
    const DEFAULT_GROUP = document.createElement('div');
    DEFAULT_GROUP.className = "group";
    DEFAULT_GROUP.innerHTML = LIST_CARD_HTML();
    DEFAULT_GROUP.ondragover = onDragOver;
    DEFAULT_GROUP.ondrop = groupDrop;
    return DEFAULT_GROUP;
  };
  
  

  window.addNewGroup = function() {
    let Content = document.getElementsByClassName('content')[0];
    let group = getDefaultGroup();
    Content.appendChild(group);
  };

  window.addCard = function(type) {  
    let group = type.parentNode;   
    let card = getDefaultCard();
    let titleCard = card.getElementsByClassName("card-title")[0];
    titleCard.innerText = "Title - "  + id;
    id++;
    group.insertBefore(card, group.lastElementChild);
  };

  window.removeCard = function(elementForRemoval){
    while(elementForRemoval.className != "card") {
      elementForRemoval = elementForRemoval.parentNode;
    };
    elementForRemoval.parentNode.removeChild(elementForRemoval);
  };

  function dragDropCard(dragCard,dropCard){
    let dropGroup = dropCard;
    while(dropGroup.className != "group") {
      dropGroup = dropGroup.parentNode;
    };
    dropGroup.insertBefore(dragCard, dropCard);
  };

}());