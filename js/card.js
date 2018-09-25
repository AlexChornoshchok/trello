function CardService(){
    var id = 0;
    this.dragCard;
    var DefaultCard = function() {
        let defCard = document.createElement('div');
        defCard.className = "card";
        defCard.draggable = true;
        defCard.ondragstart = onDragStartCard;
        //defaultCard.ondrop = options.cardDrop; 
        defCard.ondragover = function(event) {
            event.preventDefault();
            };
        defCard.innerHTML = `
              <div class="card-header">
                 <progress max="100" value="50">Progress bar</progress>
                 <span  onclick = "applicationFunction.removeCard(this)">X</span>
              </div>
              <div class = "card-title">
                <h4>Title ` + id++ + `</h4>
              </div>
              <div class = "card-main">
                <button class = "card-edit" onclick = "applicationFunction.openModal()">
                  ...
                </button> 
                <div class = "card-status">  
                </div> 
                  <div class = "card-date"> Date </div>       
                    <img class = "card-img" src="./img/avatar_default.jpg" alt="avatar">
                  </div>    
                </div>     
            `;
            return defCard;
        };

    onDragStartCard = function(event){
        dragCard = event.toElement;
        while(dragCard.className != "card") {
            dragCard = dragCard.parentNode;
        };
        event.stopPropagation();
    }; 
    
    this.addCard = function(option){
        var cardList = option.previousElementSibling;
        cardList.appendChild(DefaultCard());
    };

    this.removeCard = function(elementForRemoval, removeGroup){
        while(elementForRemoval.className != "card") {
            elementForRemoval = elementForRemoval.parentNode;
          };
          let oldGroup = elementForRemoval.parentElement.parentElement;
          elementForRemoval.parentNode.removeChild(elementForRemoval);
          removeGroup(oldGroup);
    };

    this.getDefaultCard = function(){
        return DefaultCard(); 
    };

    this.onDragStartGroup = function(event){
        dragGroup = event.toElement;
        while(dragGroup.className != "group") {
          dragGroup = dragGroup.parentNode;
        };
        event.stopPropagation();
      };

      

      this.cardDrop = function(event) {
        dropCard = event.toElement;
        while(dropCard.className != "card") {
          dropCard = dropCard.parentNode;
        };
        dragDropCard(dragCard,dropCard);
        event.stopPropagation();
      };
};