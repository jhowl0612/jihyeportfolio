$(function(){
	$('ul>li').hover(function(){
		var tg=$(this);
		var i=tg.index();
		var bd=$('.bd').eq(i);
		bd.stop().animate({left:0,width:'100%'},500);
	},function(){
		var tg=$(this);
		var i=tg.index();
		var bd=$('.bd').eq(i);
		bd.stop().animate({left:'50%',width:0},500);
	});
});