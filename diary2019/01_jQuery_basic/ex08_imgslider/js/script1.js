$(function(){
	var interval=1000;
	$('.slideshow').each(function(){
		var timer
		var container=$(this);
		function switchImg(){
			var anchors=container.find('a');
			var first=anchors.eq(0);
			var second=anchors.eq(1);
			
			first.fadeOut().appendTo(container);
			second.fadeIn()
		}
	
		function startTimer(){
			timer=setInterval(switchImg,interval)
		}
		
		
		function stopTimer(){
			clearInterval(timer)
		}
		startTimer();
		container.hover(function(){
			stopTimer();
		},function(){
			startTimer();
		})
	});
	
});