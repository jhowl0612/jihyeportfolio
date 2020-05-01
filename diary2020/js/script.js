$(function(){
	/* 탭 기능 */
	$('#left>ul>li').on('click',function(){
		var i = $(this).index()
		$('#right>.article>li').removeClass('on');
		$('#right>.article>li').eq(i).addClass('on');
	});
});