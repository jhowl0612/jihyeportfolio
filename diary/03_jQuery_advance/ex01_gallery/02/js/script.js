$(function(){
	$('#caption').remove();
	$('.thumbs em').hide();
	
	$('.thumbs a').click(function(){
		$('#caption').remove();
		var path=$(this).attr('href');//클릭한 a의 링크를 변수에 대입
		$('#largeImg>img').attr({src:path});
		
		var msg=$(this).next('em').text();
		$('#largeImg').append('<div id="caption"></div>')
		$('#largeImg #caption').text(msg);
		var posy=$('#largeImg #caption').height()+25;
		$('#largeImg #caption').animate({top:-posy+"px"},3000);
		return false;
	});
});