;(function () {

  var LIST_CARD_HTML = function() {
    return `
      <div class="header"> <h4> Title ${id++} </h4> </div>
      <div class="footer" onclick = "addCard(this)"> Add card</div>
    `;
  };
  
  var id = 0;
  var dragCard;
  var dropCard;
  var dragGroup;
  var dropGroup;
  
  window.onDragStartGroup = function(event){
    dragGroup = event.toElement;
    while(dragGroup.className != "group") {
      dragGroup = dragGroup.parentNode;
    };
    event.stopPropagation();
  };

  window.onDragStartCard = function(event){
    dragCard = event.toElement;
    while(dragCard.className != "card") {
      dragCard = dragCard.parentNode;
    };
    event.stopPropagation();
  };

  window.groupDrop = function(event) {
    let oldGroup =dragCard.parentNode; 
    dropGroup = event.toElement;
    while(dropGroup.className != "group") {
      dropGroup = dropGroup.parentNode;
    };
    dropGroup.insertBefore(dragCard, dropGroup.lastElementChild);
    removeGroup(oldGroup);
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
    let defaultCard = document.createElement('div');
    defaultCard.className = "card";
    defaultCard.draggable = true;
    defaultCard.ondragstart = onDragStartCard;
    defaultCard.ondrop = cardDrop; 
    defaultCard.ondragover = onDragOver;
    defaultCard.innerHTML = `
          <div class="card-header">
             <progress max="100" value="10">Progress bar</progress>
             <span  onclick = "removeCard(this)">X</span>
          </div>
          <div class = "card-title">
            <h4>Title ${id++}</h4>
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
      return defaultCard;
  };

  function getDefaultGroup () {
    let defaultGroup = document.createElement('div');
    defaultGroup.className = "group";
    // defaultGroup.draggable = true;
    defaultGroup.innerHTML = LIST_CARD_HTML();
    defaultGroup.ondragstart = onDragStartGroup;
    defaultGroup.ondragover = onDragOver;
    defaultGroup.ondrop = groupDrop;
    return defaultGroup;
  };
  
  window.addNewGroup = function() {
    let Content = document.getElementsByClassName('content')[0];
    let group = getDefaultGroup(); 
    group.insertBefore(getDefaultCard(), group.lastElementChild);
    Content.appendChild(group);
  };

  window.addCard = function(type) {  
    let group = type.parentNode;
    group.insertBefore(getDefaultCard(), group.lastElementChild);
  };

  window.removeCard = function(elementForRemoval){    
    while(elementForRemoval.className != "card") {
      elementForRemoval = elementForRemoval.parentNode;
    };
    let oldGroup =elementForRemoval.parentNode;
    elementForRemoval.parentNode.removeChild(elementForRemoval);
    removeGroup(oldGroup);
  };

  window.removeGroup = function(elementForRemoval){
    if (elementForRemoval.childElementCount ==2){
      elementForRemoval.parentNode.removeChild(elementForRemoval);
    };
  };

  function dragDropCard(dragCard,dropCard){
    let dropGroup = dropCard;
    while(dropGroup.className != "group") {
      dropGroup = dropGroup.parentNode;
    };
    let oldGroup =dragCard.parentNode;
    dropGroup.insertBefore(dragCard, dropCard);
    removeGroup(oldGroup);
  };

}());