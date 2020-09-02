$(function(){
	var menu=$('#nav>li');
	menu.hover(function(){
		var tg=$(this);
		var onImg=tg.find('.text_image>.on');
		var offImg=tg.find('.text_image>.off');
		var menuImage=tg.find('.menu_image');
		var imageHeight=menuImage.find('img').innerHeight();
		
		onImg.css('display','block');
		offImg.css('display','none')
		
		menuImage.stop().animate({height:imageHeight},{duration:600, deasing:'easeOutCubic'});
	},function(){
		var tg=$(this);
		var onImg=tg.find('.text_image>.on');
		var offImg=tg.find('.text_image>.off');
		var menuImage=tg.find('.menu_image');
		var imageHeight=0;
		
		onImg.css('display','none');
		offImg.css('display','block')
		
		menuImage.stop().animate({height:imageHeight},{duration:600, deasing:'easeOutCubic'});
	})
});