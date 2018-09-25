function GroupService(){
    var id = 1;
    var getDefaultGroup = function() {
        let defaultGroup = document.createElement('div');
        defaultGroup.className = "group";
        defaultGroup.innerHTML = `
        <div class="group-header"> <h4> Title ${id++} </h4> </div>
        <div class="card-list"></div>
        <div class="group-footer" onclick = "applicationFunction.addCard(this)"> Add card</div>
        `;
        defaultGroup.ondragstart = applicationFunction.onDragStartGroup;
        defaultGroup.ondrop = applicationFunction.groupDrop;
        defaultGroup.ondragover = function(event) {
            event.preventDefault();
        };
        return defaultGroup;
    };

    this.addNewGroup = function(card) {    
        var content = document.getElementsByClassName('content')[0];
        var group = getDefaultGroup(); 
        group.children[1].appendChild(card);
        content.appendChild(group);
    };

    this.removeGroup = function(){
        if (!elementForRemoval.children[1].childElementCount){
            elementForRemoval.parentNode.removeChild(elementForRemoval);
        };
    };
};