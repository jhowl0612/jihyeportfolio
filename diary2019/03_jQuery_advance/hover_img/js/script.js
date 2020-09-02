$(function(){
	$('.hover_opa div').css('opacity','0');
	
	$('.banner').hover(function(){
		var tg=$(this)
		var tgHv1=tg.find('.hover_x1');
		var tgHv2=tg.find('.hover_x2');
		var tgHv3=tg.find('.hover_y1');
		var tgHv4=tg.find('.hover_y2');
		
		tgHv1.css('opacity','0.2').stop().animate({height:0},500)
		tgHv2.css('opacity','0.2').stop().animate({height:0},500)
		tgHv3.css('opacity','0.2').stop().animate({width:0},500)
		tgHv4.css('opacity','0.2').stop().animate({width:0},500)
	},function(){
		var tg=$(this)
		var tgHv1=tg.find('.hover_x1');
		var tgHv2=tg.find('.hover_x2');
		var tgHv3=tg.find('.hover_y1');
		var tgHv4=tg.find('.hover_y2');
		
		tgHv1.stop().animate({height:'50%', opacity:0},500)
		tgHv2.stop().animate({height:'50%', opacity:0},500)
		tgHv3.stop().animate({width:'50%', opacity:0},500)
		tgHv4.stop().animate({width:'50%', opacity:0},500)
	});
});