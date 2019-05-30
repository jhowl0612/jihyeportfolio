$(function(){
	$('div').hover(function(){
		$(this).find('img').css({left:'-50px',top:'-50px',width:'700px',opacitiy:0, display:'inline'}).animate({left:0,top:0,opacitiy:1,width:600},500);
	},function(){
		$(this).find('img').stop().fadeOut();
	});
});