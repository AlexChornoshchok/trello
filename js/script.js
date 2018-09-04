(function () {

  const  LIST_CARD_HTML = function() {
    return `
      <div class="header"> <h4> Title </h4> </div>
      <div class="footer" onclick = "addCard(this)"> Add card</div>
    `;
  }
    
  window.onDragStart = function(event){
    console.log(event);
  };

  window.cardDrop = function(event) {
    console.log(event);
  };

  window.onDragOver = function(event) {
    event.preventDefault();
  };

  const DEFAULT_CARD = document.createElement('div');
  DEFAULT_CARD.className = "card";
  DEFAULT_CARD.draggable = true;
  DEFAULT_CARD.ondragstart = onDragStart;
  //DEFAULT_CARD.addEventListener("DragStart", onDragStart());
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
  const DEFAULT_GROUP = document.createElement('div');
  DEFAULT_GROUP.className = "group";
  DEFAULT_GROUP.innerHTML = LIST_CARD_HTML();
  DEFAULT_GROUP.ondragover = onDragOver;
  //DEFAULT_GROUP.ondrop = cardDrop;
  //DEFAULT_CARD.addEventListener("ondrop", cardDrop()); 
  //DEFAULT_GROUP.ondrop = function(event){console.log(event);};
  

  window.addNewGroup = function() {
    let Content = document.getElementsByClassName('content')[0];
    let group = DEFAULT_GROUP.cloneNode(true);
    group.insertBefore(DEFAULT_CARD.cloneNode(true), group.lastElementChild);
    Content.appendChild(group);
  };

  window.addCard = function(type) {  
    let group = type.parentNode;
    let card = DEFAULT_CARD.cloneNode(true);
    card.ondragstart = onDragStart;
    group.insertBefore(card, group.lastElementChild);
  };

  window.removeCard = function(elementForRemoval){
    console.log(elementForRemoval);
    while(elementForRemoval.className != "card") {
      elementForRemoval = elementForRemoval.parentNode;
    };
    console.log(elementForRemoval);
    elementForRemoval.parentNode.removeChild(elementForRemoval);
  };

  
  


}());