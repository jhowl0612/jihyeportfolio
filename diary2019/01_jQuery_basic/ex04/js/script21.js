jQuery(document).ready(function(){
	$('#box').mouseenter(function(){
		$('#box').text('마우스 엔터의 기능으로서만 효과를 줌 즉 하위에 자식이 있을 경우 영향을 미치지 못함');
	});
	$('#box').mouseleave(function(){
		$('#box').text('이번에는 마우스 엔터에 대해서...');
	});
});