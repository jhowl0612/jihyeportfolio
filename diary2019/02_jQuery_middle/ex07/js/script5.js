$(function(){
	var tCurrent=0;
	var bCurrent=0;
	var lCurrent=0;
	var rCurrent=0;
	
	
	var tBanner=$('#wrapper .top li');
	var bBanner=$('#wrapper .bottom li');
	var lBanner=$('#wrapper .left li');
	var rBanner=$('#wrapper .right li');
	setInterval(function(){
		var tPrev=tBanner.eq(tCurrent);
		var bPrev=bBanner.eq(bCurrent);
		var lPrev=lBanner.eq(lCurrent);
		var rPrev=rBanner.eq(rCurrent);

		tMove(tPrev, 0, '-100%')
		bMove(bPrev, 0, '-100%')
		lMove(lPrev, 0, '-100%')
		rMove(rPrev, 0, '-100%')
		tCurrent++;
		bCurrent++;
		lCurrent++;
		rCurrent++;
		
		if(tCurrent==tBanner.size()){tCurrent=0;}
		if(bCurrent==bBanner.size()){bCurrent=0;}
		if(lCurrent==lBanner.size()){lCurrent=0;}
		if(rCurrent==rBanner.size()){rCurrent=0;}
		
		var tNext=tBanner.eq(tCurrent);
		var bNext=bBanner.eq(bCurrent);
		var lNext=lBanner.eq(lCurrent);
		var rNext=rBanner.eq(rCurrent);
		tMove(tNext, '100%', 0)
		bMove(bNext, '100%', 0)
		lMove(lNext, '100%', 0)
		rMove(rNext, '100%', 0)
	},500);
	
	function tMove(tg, start, end){
		tg.css('top',start).stop().animate({top:end},{duration:500,ease:'easeOutCubic'})
	}
	function bMove(tg, start, end){
		tg.css('bottom',start).stop().animate({bottom:end},{duration:500,ease:'easeOutCubic'})
	}
	function lMove(tg, start, end){
		tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'})
	}
	function rMove(tg, start, end){
		tg.css('right',start).stop().animate({right:end},{duration:500,ease:'easeOutCubic'})
	}
});




























