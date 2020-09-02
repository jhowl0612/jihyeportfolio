$(function(){
	$('.sub').hide();
	$('div.title').click(function(){
		$('.sub').slideUp(400);
		$(this).next().slideDown(400);
	});
	
});