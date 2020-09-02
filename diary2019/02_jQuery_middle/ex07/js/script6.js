$(function(){
	$('button').click(function(){
		var easing=$('select>option:selected').html();
		//option 중 선택된 문서를 가져옴
		$('div').animate({left:600},500,easing).animate({left:0},500,easing);
	});
});




























