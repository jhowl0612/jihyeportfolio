$(function(){
	$('.rollover').each(function(){
		var a=$(this);
		var img=a.find('img');
		var src_off=img.attr('src');
		var src_on=src_off.replace('off','on');
		$('<img/>').attr('src',src_on);
		//이미지를 불러오는 시간을 생략하기 위해 미리 on이미지를 불러 캐시에 저장해 둠
		
		a.hover(function(){
			img.attr('src',src_on);
		},function(){
			img.attr('src',src_off);
		});
	});
});