$(function(){
	$('.box_in .box1').hover(function(){
		$('.box_in .box1>a').stop().animate({'margin-top':'-294px'},250);
	},function(){
		$('.box_in .box1>a').stop().animate({'margin-top':'0px'},250);
	});
	$('.box_in .box2').hover(function(){
		$('.box_in .box2>a').stop().animate({'margin-top':'-294px'},250);
	},function(){
		$('.box_in .box2>a').stop().animate({'margin-top':'0px'},250);
	});
	$('.box_in .box3').hover(function(){
		$('.box_in .box3>a').stop().animate({'margin-top':'-294px'},250);
	},function(){
		$('.box_in .box3>a').stop().animate({'margin-top':'0px'},250);
	});
});