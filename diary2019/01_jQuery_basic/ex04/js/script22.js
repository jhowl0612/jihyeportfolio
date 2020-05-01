jQuery(document).ready(function(){
	$('#box').mouseover(function(){
		$('#box').text('하위 자식에도 영향을 미침');
	});
	$('#box').mouseout(function(){
		$('#box').text('이번에는 마우스 오버에 대해...');
	});
});