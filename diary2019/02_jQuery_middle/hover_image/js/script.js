$(function(){
	$('.sns a').hover(function(){
		$(this).find('img').css({'transform':'scale(1.3)','transition':'all 0.3s'});
	},function(){
		$(this).find('img').css({'transform':'scale(1)'});
	});
});