;(function () {
  
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:/ChromeDevSession"
  // function getFile(cb){
  //   let xhr = new XMLHttpRequest();

  //   xhr.open('GET','data.json',true);
  //   xhr.send();

  //   xhr.onreadystatechange = function(){
  //     if(xhr.readyState != 4){
  //       return;
  //     }      
  //     if(xhr.status === 0){
  //       cb(false, JSON.parse(xhr.response));
  //     } else {
  //       cb(true, JSON.parse(xhr.response));
  //     };
  //   };
  // };

  // function init() {
  //   getFile( function(error, response){
  //     if(error){
  //       return;
  //     };
  //     console.log(response);
  //     for(let i=0; i < response.length; i++){
  //       addNewGroup(response[i]);
  //       //addCard(); 
  //     };  
  //   });
  // };


  
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
             <progress max="100" value="${10 + id++}">Progress bar</progress>
             <span  onclick = "removeCard(this)">X</span>
          </div>
          <div class = "card-title">
            <h4>Title ${id++}</h4>
          </div>
          <div class = "card-main">
            <button class = "card-edit" onclick = "openModal()">
              ...
            </button> 
            <div class = "card-status">  
            </div> 
              <div class = "card-date"> Date </div>       
                <img class = "card-img" src="./img/avatar_default.jpg" alt="avatar">
              </div>    
            </div>     
      `;
      return defaultCard;
  };

  function getDefaultGroup () {
  
    let defaultGroup = document.createElement('div');
    defaultGroup.className = "group";
    defaultGroup.innerHTML = `
    <div class="group-header"> <h4> Title ${id++} </h4> </div>
    <div class="card-list"></div>
    <div class="group-footer" onclick = "addCard(this)"> Add card</div>
    `;
    defaultGroup.ondragstart = onDragStartGroup;
    defaultGroup.ondragover = onDragOver;
    defaultGroup.ondrop = groupDrop;
    return defaultGroup;
  };
  
  window.addNewGroup = function() {    
    var Content = document.getElementsByClassName('content')[0];
    var group = getDefaultGroup(); 
    group.children[1].appendChild(getDefaultCard());
    Content.appendChild(group);
  };

  window.addCard = function(type) {  
    let cardList = type.previousElementSibling;
    cardList.insertBefore(getDefaultCard(), cardList.lastElementChild);
  };

  window.removeCard = function(elementForRemoval){    
    while(elementForRemoval.className != "card") {
      elementForRemoval = elementForRemoval.parentNode;
    };
    let oldGroup = elementForRemoval.parentElement.parentElement;
    elementForRemoval.parentNode.removeChild(elementForRemoval);
    removeGroup(oldGroup);
  };

  window.removeGroup = function(elementForRemoval){
    if (!elementForRemoval.children[1].childElementCount){
      elementForRemoval.parentNode.removeChild(elementForRemoval);
    };
  };

  function dragDropCard(dragCard,dropCard){
    let dropGroup = dropCard;
    while(dropGroup.className != "card-list") {
      dropGroup = dropGroup.parentNode;
    };
    let oldGroup = dragCard.parentElement.parentElement;
    dropGroup.insertBefore(dragCard, dropCard);   
    removeGroup(oldGroup);
  };

  window.openModal = function(){
    var options = {
      template: `
      <div class="card-popup">
        <div class="card-header">
          <progress max="100" value="10">Progress bar</progress>
          <span onclick = "closeModal()">X</span>
        </div> 
        <div class = "card-title">
          <h4>Title HTML</h4>
        </div> 
        <div class = "card-main">
          <button class = "card-edit" onclick = "openModal()">...</button> 
          <div class = "card-status"> </div> 
          <div class = "card-date"> Date </div>   
          <img class = "card-img" src="./img/avatar_default.jpg" alt="avatar">
        </div>  
      </div>  
    `
    };
    var modal = new ModalService(options);
    modal.open();
  };
  
  window.closeModal = function(){
    var options = {
      template: ``
    };

    var modal = new ModalService(options);
    modal.close();
  }

addNewGroup();
//  init();

}());