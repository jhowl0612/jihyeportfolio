$(function(){
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#css').offset();
		
		if(sct>hello.top-250){
			$('.css_left').stop().animate({left:5},1000);
			$('.css_right').stop().animate({right:10},1000);
		}else{
			$('.css_left').stop().animate({left:-900},1000);
			$('.css_right').stop().animate({right:-900},1000);
		}
	});
	
	$('.hidden').hover(function(){
		var ah=$(this).find('a').innerHeight();
		var img=$(this).find('img');
		var imgh=$(this).find('img').innerHeight()-283;
		
		img.stop().animate({top:ah-imgh},3500)
	},function(){
		var ah=$(this).find('a').innerHeight();
		var img=$(this).find('img');
		img.stop().animate({top:0},2000)
	});
	
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#jquery').offset();
		
		if(sct>hello.top-250){
			$('.jquery_text_one>ul').slideDown(1000);
			$('.jquery_text_two>ul').slideDown(1000);
		}
	});
	
	$('.hidden02').hover(function(){
		var ah=$(this).find('a').innerHeight();
		var img=$(this).find('img');
		var imgh=$(this).find('img').innerHeight()-450;
		
		img.stop().animate({top:ah-imgh},4000)
	},function(){
		var ah=$(this).find('a').innerHeight();
		var img=$(this).find('img');
		img.stop().animate({top:0},2000)
	});
	
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var hello=$('#adaptive').offset();
		
		if(sct>hello.top-250){
			$('.adaptive_left').stop().animate({left:5},1000);
			$('.adaptive_top>dl').slideDown(1000)
			$('.adaptive_bottom>dl').slideDown(1000)
		}
	});
	
	
	$('.hidden03').hover(function(){
		var ah=$(this).find('a').innerHeight();
		var img=$(this).find('img');
		var imgh=$(this).find('img').innerHeight()-280;
		
		img.stop().animate({top:ah-imgh},2000)
	},function(){
		var ah=$(this).find('a').innerHeight();
		var img=$(this).find('img');
		img.stop().animate({top:0},2000)
	});
	
});