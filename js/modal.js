function ModalService(options){
	this.options = options;
}

ModalService.prototype.open = function(){
	var modal = document.getElementsByClassName('card-popup-holder')[0];
	modal.innerHTML = this.options.template;
	modal.setAttribute('style','top:30%');
};

ModalService.prototype.close = function(){
	var modal = document.getElementsByClassName('card-popup-holder')[0];
	// this.options.template = '';
	modal.innerHTML = this.options.template;
	modal.setAttribute('style','top: -400');
};