$(function(){
	$('li a').each(function(){
		var bgImg=$(this).attr('data-img');
		$(this).css('backgroundImage','url('+bgImg+')')
		$('li a').hover(function(){
			$(this).stop().animate({marginLeft:'15px',height:120},200);
		},function(){
			$(this).stop().animate({marginLeft:0,height:30},200);
		})
	});
});