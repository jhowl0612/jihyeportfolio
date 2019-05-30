jQuery(document).ready(function(){
	var tempTitle;
	var type;
	
	$('a').hover(function(e){
		tempTitle=$(this).attr('title');
		type=$(this).attr('class');
		
		$(this).attr("title","");
		
		if(type=='img'){
			tempImg="<img src='"+tempTitle+"' width='100px' height='100px' />"
		}
		
		$('body').append('<div id="tip"></div>');
		if(type=='img'){
			$('#tip').html(tempImg);
			$('#tip').css('width','100px');
		}else{
			$('#tip').text(tempTitle);
		}
		var pageX=$(this).offset().left -20;
		var pageY=$(this).offset().top -$('#tip').innerHeight();
		$('#tip').css({left:pageX+"px",top:pageY+"px"}).fadeIn(500);
	},function(){
		$(this).attr("title",tempTitle);
		$('#tip').remove();
	});
});








