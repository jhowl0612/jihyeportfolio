$(function(){
	$('#home').toggle(function(){
		$('ul').stop().animate({left:50},500);
	},function(){
		$('ul').stop().animate({left:-600},500);
	});
	
	$('li').hover(function(){
		$(this).stop().animate({opacity:1},100);
	},function(){
		$(this).stop().animate({opacity:0.7},100);
	});
	
	$('#home').mousemove(function(event){
		var posY=event.pageY-parseInt($('#container').css('height'))/2+"px";//parseInt:정수(숫자데이터)로 변환
		//pos는? : 이벤트가 일어나는 페이지 - container높이 반절(100px)
		var posX=event.pageX-parseInt($('#home').css('width'))/2+"px";
		$('#container').css({'top':posY});
		$('#container').css({'left':posX});
	});
});