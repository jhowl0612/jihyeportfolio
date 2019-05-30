$(function(){
	$('.thumbs a').click(function(){
		var path=$(this).attr('href');//클릭한 a의 링크를 변수에 대입
		$('#largeImg>img').attr('src',path);
		$('#largeImg>img').css('opacity','0').stop().animate({opacity:1},1000);
		return false;
	});
});