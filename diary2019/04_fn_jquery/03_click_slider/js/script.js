$(function(){
	var moving=$('.area');
	function left(){
		moving.find('ul').stop().animate({left:200*-1},500, function(){
			$(this).children('li:first').insertAfter($(this).children('li:last'));
			$(this).css({left:0});
		});
	}
	function right(){
		moving.find('ul li:last').insertBefore(moving.find('ul li:first'));
		moving.find('ul').css({left:200*-1}).stop().animate({left:0},500);
	}
	
	$('.left').click(function(){
		right();
		return false;
	})
	$('.right').click(function(){
		left();
		return false;
	})
	
	var slide=$('.area ul');
	var slideWidth=slide.width();
	var slideList=$('.area ul li');
	var slideListWidth=$('.area ul li').width();
	var current=0;
	var setIntervalId;
	
	mainSlide();
	function mainSlide(){
		setIntervalId=setInterval(function(){
			slide.stop().animate({left:-slideListWidth},500,function(){
				$('.area ul>li:first').insertAfter('.area ul>li:last');
				slide.css({left:0});
			});
		},2000);
	}
	
	$('.area ul, .left, .right').hover(function(){
		clearInterval(setIntervalId);
	},function(){
		mainSlide();
	});
	
})