$(function(){
	var sct;
	var winHt=$(window).height();
	var totHt=$('html,body').height();
	var section=$('.back>section');
	var totSize=section.size();
	
	$(window).on('scroll',function(e){
		scrollEvt();
	});
	
	function scrollEvt(){
		sct=$(window).scrollTop();
		scrollAni();
	}
	
	function scrollAni(){
		if(sct<600){
			$('#sec01 .mask img').stop().css({'transform':'translate3d(0,' + ((sct*0.7)-95) + 'px,0)'});
		$('#sec01 .S1_typo').stop().css({'transform':'translate3d(0,' + -sct*0.5 + 'px,0)'});
		};
		if(sct>200 && sct<1200){
			$('#sec02 .mask img').stop().css({'transform':'translate3d(' + -(sct-200)*0.13 + 'px , 0 , 0)'});
			$('#sec02 .S2_typo').stop().css({'transform':'translate3d(0,' + -(sct-200)*0.1 + 'px,0)'});
			$('#sec02').stop().css({'background-position':'950px ' + (140+((sct-200)*0.24)) + 'px'});
		};
		if(sct>700 && sct<1600){
			$('#sec03 .mask img').stop().css({'transform':'translate3d(0,' + -(sct-700)*0.21 + 'px,0)'});
			$('#sec03 .mask img').stop().css({'opacity': ((sct-700)*0.002)-0.015 });
			$('#sec03 .S3_typo').stop().css({'transform':'translate3d(0,' + -(sct-700)*0.05 + 'px,0)'});
			$('#sec03').stop().css({'background-position':'20px ' + (150+((sct-700)*0.15)) + 'px'});
			$('#sec03').stop().css({'background-size': (240+((sct-700)*0.03)) + 'px'});
		};
		if(sct>1000 && sct<2100){
			$('#sec04 .mask img').stop().css({'transform':'translate3d(0,' + (((sct-1600)*0.2)-40) + 'px,0)'});
			$('#sec04 .back04').stop().css({'transform': 'rotate(' + (sct-1400)*0.25 + 'deg)'});
			$('#sec04 .back04').stop().css({'opacity': (sct-1100)*0.0027-0.03});
		};
		if(sct>1500 && sct<2600){
			$('#sec05 .S5_typo').stop().css({'transform':'translate3d(0,' + (sct-1500)*0.1 + 'px,0)'});
			$('#sec05 .mask1 img').stop().css({'transform':'translate3d(' + (((sct-1700)*0.05)-45) + 'px , 0 , 0)'});
			$('#sec05 .mask2 img').stop().css({'transform':'scale(' + (1.2-((sct-1700)*0.0002)) + ')'});
			$('#sec05 .mask3 img').stop().css({'transform':'translate3d(' + -(sct-1700)*0.05 + 'px , 0 , 0)'});
		};
		if(sct>2100){
			$('#sec06 .mask2').stop().css({'opacity': -(sct-2700)*0.01});
			$('#sec06 .mask3').stop().css({'left': ((sct-2100)*0.76) + 'px'});
			$('#sec06 .S6_typo').stop().css({'opacity': (sct-2500)*0.01});
		};
		if(sct>2530){
			$('#sec06 .fixed').stop().css({'position':'fixed','top':'320px','min-width':'1380px'});
		}else{
			$('#sec06 .fixed').stop().css({'position':'relative','top':'initial','min-width':'initial'});
		};
		
		if(sct>1725){
			sec5Move()
		}else{
			sec5Reset()
		};
		if(sct>1050){
			$('main .front .mask4').stop().css({'display':'none'});
		}else{
			$('main .front .mask4').stop().css({'display':'inline'});
		};
		
		$('main .front .mask1').stop().css({'transform':'translate3d(0,' + (sct*0.55) + 'px,0)'});
		$('main .front .mask1 img').stop().css({'transform': 'rotate(' + -sct*0.05 + 'deg)'});
		$('main .front .mask2').stop().css({'transform':'translate3d(0,' + (sct*0.178) + 'px,0)'});
		$('main .front .mask2 img').stop().css({'transform': 'rotate(' + -sct*0.028 + 'deg)'});
		$('main .front .mask3').stop().css({'transform':'translate3d(' + (sct*0.06) + 'px,' + (sct*0.28) + 'px,0)'});
		$('main .front .mask3 img').stop().css({'transform': 'rotate(' + -sct*0.015 + 'deg)'});
		$('main .front .mask4').stop().css({'transform':'translate3d(0,' + (sct*0.22) + 'px,0)'});
		$('main .front .mask4 img').stop().css({'opacity': 1-(sct*0.00095) });
		$('main .front .mask5').stop().css({'transform':'translate3d(0,' + (sct*0.227) + 'px,0)'});
		$('main .front .mask5 img').stop().css({'transform': 'rotate(' + sct*0.05 + 'deg)'});
		$('main .front .mask6').stop().css({'transform':'translate3d(0,' + (sct*0.2) + 'px,0)'});
		$('main .front .mask6 img').stop().css({'transform': 'rotate(' + sct*0.02 + 'deg)'});
	}
	
	function sec5Move(){
		$('#sec05 .mask1').stop().animate({top:210,left:50},{duration:300, easing:'easeOutQuart'});
		$('#sec05 .mask2').stop().animate({top:260,left:390},{duration:300, easing:'easeOutQuart'});
		$('#sec05 .mask3').stop().animate({top:180,right:50},{duration:300, easing:'easeOutQuart'});
	};
	function sec5Reset(){
		$('#sec05 .mask1').stop().animate({top:300,left:-600},{duration:200, easing:'easeOutQuart'});
		$('#sec05 .mask2').stop().animate({top:600,left:390},{duration:200, easing:'easeOutQuart'});
		$('#sec05 .mask3').stop().animate({top:450,right:-600},{duration:200, easing:'easeOutQuart'});
	};
});