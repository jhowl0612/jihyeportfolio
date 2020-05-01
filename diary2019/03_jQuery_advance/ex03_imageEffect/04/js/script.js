$(function(){
	$('#colorPicker div').each(function(){
		$(this).css('background-color',$(this).text());
	});
	$('#colorPicker div').click(function(){
		var color=$(this).text();
		$('body').animate({backgroundColor:color},1000);
	});
});