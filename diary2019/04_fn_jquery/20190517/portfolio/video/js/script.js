jQuery(document).ready(function(){
	if(!Modernizr.csstransitions){
		interval=1500;
		
		setInterval(function(){
			$('.btnContents i.nth3').animate({
				right:'300',opacity:'0.2'
			},'slow').animate({
				right:'200',opacity:'0.9'
			},'slow');
		},interval);
		setInterval(function(){
			$('.btnContents i.nth2').animate({
				right:'260',opacity:'0.4'
			},'slow').animate({
				right:'200',opacity:'0.9'
			},'slow');
		},interval);
		setInterval(function(){
			$('.btnContents i.nth1').animate({
				right:'220',opacity:'0.6'
			},'slow').animate({
				right:'200',opacity:'0.9'
			},'slow');
		},interval);
		
		
		$('#side').css('opacity','0');
		$('#side .con').css('opacity','0');
		$('#side .btnContents').css('opacity','0');
		$('#sns>li>a>i').css('opacity','0.6');
		
		$(function(){
			var sns=$('#sns>li>a>i');
			sns.hover(function(){
				$(this).css('font-size','30px').css('opacity','1');
			},function(){
				$(this).css('font-size','25px').css('opacity','0.6');
			})
		});
		
		
		
	}
	
	
	
});
