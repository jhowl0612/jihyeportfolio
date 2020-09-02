$(function(){
	$('ul li a').click(function(){
		var strName=$(this).parent().attr('id');
		slideTarget(strName.substr(3,1));
		$(this).addClass('active')
		return false;
	});
	
	function slideTarget(n){
		var pos=Number(n)*-600;
		$('#viewer').animate({left:pos},500);
	};
	
});