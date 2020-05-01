$(function(){
	$('.sub').hide();
	$('div.title').click(function(){
		var th=$(this).next();
		$('.sub').slideUp();
		if(th.is(':visible')){
			th.slideUp();
		}else{
			th.slideDown();
		};
	});
});