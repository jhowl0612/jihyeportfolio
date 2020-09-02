$(function(){
	$('.banner .gogo1').hover(function(){
		$('.banner .gogo1>a').stop().animate({'margin-left':'75px'},250);
	},function(){
		$('.banner .gogo1>a').stop().animate({'margin-left':'0px'},250);
	});
	$('.banner .gogo2').hover(function(){
		$('.banner .gogo2>a').stop().animate({'margin-left':'75px'},250);
	},function(){
		$('.banner .gogo2>a').stop().animate({'margin-left':'0px'},250);
	});
});