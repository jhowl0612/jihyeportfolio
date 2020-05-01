$(function(){
	var topLine=$('.top_line');
	var bottomLine=$('.bottom_line');
	var rightLine=$('.right_line');
	var leftLine=$('.left_line');
	
	setInterval(function(){
		topLine.css('left','-100%').animate({left:0},500);
		bottomLine.css('left','100%').animate({left:0},500);
		rightLine.css('top','-100%').animate({top:0},500);
		leftLine.css('top','100%').animate({top:0},500);
	},1000);
});