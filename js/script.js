;(function(){
    var cards = [
        '<div class="header"> Header</div>',
        '<div class="footer"> Footer</div>'

    ];
    var defauiltCard = '<div class="card">Card</div>';
    var group = document.getElementsByClassName("group")[0];
    
    group.innerHTML = cards;
    
    window.addCard  = function() {
        cards.splice(cards.length-1, 0, defauiltCard);
        group.innerHTML = cards;
    }
})();