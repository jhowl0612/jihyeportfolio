$(function(){
	var current=0;
	var banner=$('#wrapper li');
	setInterval(function(){
		var prev=banner.eq(current);
		move(prev, 0, '-100%')
		current++;
		
		if(current==banner.size()){current=0;}
		
		var next=banner.eq(current);
		move(next, '100%', 0)
	},500);
	
	function move(tg, start, end){
		tg.css('top',start).stop().animate({top:end},{duration:500,ease:'easeOutCubic'})
	}
});