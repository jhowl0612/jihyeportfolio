jQuery(document).ready(function(){
	$('.animal').each(function(){
		var name=$(this).text();
		alert(name);
	});
});