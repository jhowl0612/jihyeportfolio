$(function(){
	var page=$('#stories .issue .imgBox .page .view');
	var current=0;
	var prev=$('#stories .issue .imgBox .btn .prev');
	var next=$('#stories .issue .imgBox .btn .next');
	var btns=$('#stories .issue .imgBox .btn_bt a');
	var timer;
	
	
	function event(){
		if(current==page.size()){
			current=0;
		}
		var next=current+1;
		if(current==page.size()-1){next=0;}
		page.eq(current).css({'z-index':'0',width:'100%'}).removeClass('right');
		page.eq(current).children('img').removeClass('right');
		page.eq(current).stop().animate({width:'0%'},1500);
		page.eq(next).css({'z-index':'1',width:'0%'}).addClass('right');
		page.eq(next).children('img').addClass('right');
		page.eq(next).stop().animate({width:'100%'},1516);
		current++;
		btns.removeClass('on');
		btns.eq(next).addClass('on');
	}
	timer=setInterval(event,3000);
	
	$('#stories').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(event,3000);
	});
	
	next.click(function(){
		event()
		return false;
	});
	
	prev.click(function(){
		if(current<0){
			current=page.size()-1;
		}
		var next=current-1;
		if(current==0){next=page.size()-1;}
		page.eq(current).css({'z-index':0, width:'100%'}).addClass('right');
		page.eq(current).children('img').addClass('right');
		page.eq(current).stop().animate({width:'0%'},1500);
		page.eq(next).css({'z-index':'1',width:'0%'}).removeClass('right');
		page.eq(next).children('img').removeClass('right');
		page.eq(next).stop().animate({width:'100%'},1516);
		current--;
		btns.removeClass('on');
		btns.eq(next).addClass('on');
		return false;
	});
	
	
	
	
	btns.click(function(){
		var tg=$(this).index();
		page.eq(current).css({'z-index':'0',width:'100%'}).removeClass('right');
		page.eq(current).children('img').removeClass('right');
		page.eq(current).stop().animate({width:'0%'},1500);
		page.eq(tg).css({'z-index':'1',width:'0%'}).addClass('right');
		page.eq(tg).children('img').addClass('right');
		page.eq(tg).stop().animate({width:'100%'},1516);
		
		current=tg;
		btns.removeClass('on');
		btns.eq(tg).addClass('on');
		return false;
	});
	
	
	
	
	
	
	
	
});