$(function(){
	var menu=$('#gnb>li');//1뎁스
	var wrap=$('#gnbWrap');
	var menuHeight=menu.children('a').height();//1뎁스 a의 높이
	
	menu.on({mouseover:function(){
		var tg=$(this);
		menu.removeClass('on');
		tg.addClass('on');
		var th=menuHeight+tg.find('>.sGnbArea').height(); //1뎁스 높이 + 2뎁스 높이
		wrap.stop().animate({'height':th});
	},mouseout:function(){
		var tg=$(this);
		tg.removeClass('on');
		wrap.stop().animate({'height':menuHeight});
	}
	});
	
	menu.each(function(){
		var tg=$(this);
		var sub=tg.find('>.sGnbArea>ul>li');
		sub.hover(function(){
			var tg=$(this);
			tg.addClass('on');
		},function(){
			var tg=$(this);
			tg.removeClass('on');
		})
		
		
	})
});