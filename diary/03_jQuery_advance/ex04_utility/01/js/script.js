jQuery(document).ready(function(){
	$('.draggable').draggable({
		cursor:'move',
		stack:".draggable",
		opacity:0.8
	})
	
	$('.draggable').bind("dragstart",function(){
		$(this).addClass('invert');
	});
	$('.draggable').bind("dragstop",function(){
		$(this).removeClass('invert');
	});
});








