var applicationFunction = {};
(function () {
  
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
  
 
  var card = new CardService();
  var group = new GroupService();

  applicationFunction.onDragStartGroup = function(event){
    card.onDragStartGroup(event);
  };

  applicationFunction.groupDrop = function(event) {
    let oldGroup =dragCard.parentNode; 
    dropGroup = event.toElement;
    while(dropGroup.className != "group") {
      dropGroup = dropGroup.parentNode;
    };
    dropGroup.insertBefore(dragCard, dropGroup.lastElementChild);
    this.removeGroup(oldGroup);
  };

  applicationFunction.cardDrop = function(event) {
    dropCard = event.toElement;
    while(dropCard.className != "card") {
      dropCard = dropCard.parentNode;
    };
    dragDropCard(dragCard,dropCard);
    event.stopPropagation();
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

  applicationFunction.openModal = function(){
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
  
  applicationFunction.closeModal = function(){
    var options = {
      template: ``
    };
    var modal = new ModalService(options);
    modal.close();
  }

  // Ready
  applicationFunction.addNewGroup = function(){
    group.addNewGroup(card.getDefaultCard());
  };

  applicationFunction.removeGroup = function(elementForRemoval){
    group.removeGroup(elementForRemoval);  
  };

  applicationFunction.addCard = function(type) {  
    card.addCard(type);
  };

  applicationFunction.removeCard = function(elementForRemoval){    
    card.removeCard(elementForRemoval, group.removeGroup);
  };
//  init();

}());