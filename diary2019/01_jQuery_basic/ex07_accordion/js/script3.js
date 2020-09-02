$(function(){
	$('.sub').hide();
	$('div.title').toggle(function(){
		$('.sub').slideUp;
		var i=$(this);
		var sub=i.next('.sub');
		sub.slideDown('fast');
	},function(){
		var i=$(this);
		var sub=i.next('.sub');
		sub.slideUp('fast');
	});
	
});