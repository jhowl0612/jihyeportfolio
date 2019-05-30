jQuery(document).ready(function(){
	$('#box').hover(function(){
		$('#box').text('마우스 포인터가 위에 있습니다.');
	},function(){
		$('#box').text('마우스 포인터가 벗어났습니다.');
	});
});