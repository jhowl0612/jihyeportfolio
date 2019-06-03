$(function(){
	$('.all_search').on('focus',function(){
		$(this).css('background-position','10px -50px');
	});
	$('.all_search').on('blur',function(){
		if($(this).val()==''){
			$(this).css('background-position','10px 5px');
		}
	});
	
	$('.main_menu>li').hover(function(){
		$(this).find('img').attr('src',$(this).find('img').attr('src').replace('off.png','on.png'));
	},function(){
		$(this).find('img').attr('src',$(this).find('img').attr('src').replace('on.png','off.png'));
	})
	
	$('.main_banner>li').hover(function(){
		$(this).find('span').stop().animate({left:0},300);
	},function(){
		$(this).find('span').stop().animate({left:-255},10);
	})
	
	var slide=$('.mainslide .slide li');
	var onButton=$('.mainslide .control_bullet a:first');
	$('.mainslide .control_bullet a').click(function(){
		tg=$(this);
		
		slide.fadeOut(200);
		var num=tg.index();
		slide.eq(num).fadeIn(200);
		
		onButton.removeClass('active');
		tg.addClass('active');
		
		onButton=$(this);
		btnNum=$('.mainslide .control_bullet a').index(this);
		return false;
	});
	
	var btnNum=0;
	function autoPlay(){
		btnNum++;
		
		if(btnNum==slide.size()){
			btnNum=0;
		}
		$('.mainslide .control_bullet a').eq(btnNum).trigger('click');
		auto1=setTimeout(autoPlay,3000);
	}
	auto1=setTimeout(autoPlay,3000);
	
	$('.mainslide .play_stop .stop').click(function(){
		clearTimeout(auto1);
		return false;
	});
	
	$('.mainslide .play_stop .play').click(function(){
		auto1=setTimeout(autoPlay,1000);
		return false;
	});
	
	$('.news_area>.news_inner>h3>a').click(function(){
		$(this).parents('.news_inner').addClass('on');
		$(this).parents('.news_inner').siblings().removeClass('on');
		return false;
	});
	
	$('.foot_banner a').click(function(){
		window.open('banner.html', 'banner','width=560,height=800,top=0,left=100,scrollbars=no');
		return false;
	});
	
	
	
	
	
	
});