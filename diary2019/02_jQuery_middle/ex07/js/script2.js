$(function(){
	var menu=$('#nav>li');
	
	
	
	
	menu.hover(function(){
		close();
		var tg=$(this);
		var onImg=tg.find('.text_image>.on');
		var offImg=tg.find('.text_image>.off');
		var menuImage=tg.find('.menu_image');
		var imageWidth=menuImage.find('img').innerWidth();
		
		onImg.css('display','block');
		offImg.css('display','none')
		
		menuImage.stop().animate({width:imageWidth},{duration:600, deasing:'easeOutCubic'});
	},function(){
		var tg=$(this);
		var onImg=tg.find('.text_image>.on');
		var offImg=tg.find('.text_image>.off');
		var menuImage=tg.find('.menu_image');
		var imageWidth=0;
		
		onImg.css('display','none');
		offImg.css('display','block')
		
		menuImage.stop().animate({width:imageWidth},{duration:600, deasing:'easeOutCubic'});
		open();
	})
	open();
	function open(){
		var tg=$('#nav>li').eq(2);
		var onImg=tg.find('.text_image>.on');
		var offImg=tg.find('.text_image>.off');
		var menuImage=tg.find('.menu_image');
		var imageWidth=menuImage.find('img').innerWidth();
		
		onImg.css('display','block');
		offImg.css('display','none')
		
		menuImage.stop().animate({width:imageWidth},{duration:600, deasing:'easeOutCubic'});
	};
	
	function close(){
		var tg=$('#nav>li').eq(2);
		var onImg=tg.find('.text_image>.on');
		var offImg=tg.find('.text_image>.off');
		var menuImage=tg.find('.menu_image');
		var imageWidth=0;
		
		onImg.css('display','none');
		offImg.css('display','block')
		
		menuImage.stop().animate({width:imageWidth},{duration:600, deasing:'easeOutCubic'});
	};
	
	
	
	
});