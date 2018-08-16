;(function(){
    var listCards = [
        '<div class="header"> Header</div>',
        '<div class="footer"> Footer</div>'

    ];
    var defaultCard = '<div class="card">Card</div>';
    defaultCard.className = 'card';
    var group = document.getElementsByClassName("group")[0];
    
    //group.innerHTML = listCards;
    
    window.addCard  = function() {
        listCards.splice(listCards.length-1, 0, defaultCard);
        group.innerHTML = defaultCard;
    }
})();