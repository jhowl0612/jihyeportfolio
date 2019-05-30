$(function(){
	$('#box').hide(3000);
	
	document.write("<br/>");
	
	total=0
	for(i=1;i<=10;i++){
		total=total+i
		document.write(i);
		if(i!=10){document.write("+");}
	};
		document.write("="+total);
		
	document.write("<br/><br/>");
});