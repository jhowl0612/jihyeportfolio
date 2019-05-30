jQuery(document).ready(function(){
	var basket=$('#basket');
	var banana=$('#banana');
	var orange=$('#orange');
	var apple=$('#apple');
	
	basket.prepend(banana);
	basket.prepend(apple);
	basket.prepend(orange);
});