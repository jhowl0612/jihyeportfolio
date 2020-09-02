$(function(){
	var current=0;
	var thumbListSize=6;
	var thumbNail=$('#thumbnail');
	var prev=thumbNail.find('.left');
	var next=thumbNail.find('.right');
	var container=thumbNail.find('.container>ul');
	var containWidth=thumbNail.find('.container').width();
	var thumb=container.find('.thumb');
	var maxSize=thumb.size();
	var image=$('#gallery #image>p');
	
	
	next.click(function(){
		if(current<maxSize/thumbListSize-1){
			current++;
		}
		listMove()
	});
	
	prev.click(function(){
		if(current>0){
			current--;
		}
		listMove()
	});
	
	function listMove(){
		var tl=containWidth*current*-1;
		container.stop().animate({left:tl},400);
	}
	
	thumb.on('click',function(){
		image.css('display','none');
		var i=$(this).index();
		image.eq(i).css('display','block');
	})
	
});