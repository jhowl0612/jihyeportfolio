$(function(){
	var balloon=$('<div class="balloon"></div>').appendTo('body');
	function up(x,y){
		balloon.css({left:x+15,top:y});
	};
	
	$('.showBalloon').each(function(){
		var element=$(this);
		var text=element.attr('title');
		
		element.attr('title','');
		element.hover(function(){
			balloon.text(text);
			up(event.pageX,event.pageY);
			balloon.show();
		},function(){
			balloon.hide();
		});
		element.mousemove(function(e){
			up(event.pageX,event.pageY);
		});
	});
});