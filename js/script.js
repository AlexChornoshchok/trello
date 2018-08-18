(function () {

  // var  listCardsHTML = [
  //   '<div class="header"> <h3>Titel</h3> </div>',
  //   '<div class="footer" onclick = "addCard()"> Add card</div>'
  //   ];
    var  listCardsHTML =`
      <div class="header"> <h3>Titel</h3> </div>
      <div class="footer" onclick = "addCard()"> Add card</div>
      `;
    
  // var defaultCard = '<div class = "card">Card</div>';
  var defaultCard = document.createElement('div');
  defaultCard.className = "card";
  defaultCard.innerText = "Card"; 

    // var defaultCard = `
    // <div class="card">
    //     <div class="card-header">
    //        <progress max="100" value="10">Progress bar</progress>
    //        <span>X</span>
    //     </div>
    //     <div class = "card-title">
    //       <h4>Titel</h4>
    //     </div>
    //     <div class = "card-footer">
    //       <button class = "card-edit">
    //         ...
    //       </button> 
    //       <div class = "card-status">  
    //       </div> 
    //         <div class = "card-date"> Date </div>       
    //           <img class = "card-img" src="" alt="avatar">
    //         </div>    
    //       </div>
    // </div>      
    // `;

  var group = document.getElementsByClassName('group')[0];
  group.innerHTML = listCardsHTML;
  //var listCards = document.getElementsByClassName('card');

  window.addCard = function () {
    group.appendChild(defaultCard);
    
    // listCardsHTML.splice(listCardsHTML.length - 1, 0, defaultCard);
    //group.innerHTML = listCardsHTML;
    // listCards.insertBefore(defaultCard, listCards.lastChild);
  };
}());