$(document).ready(function(){
	var scrollLocate;
	var winHt=$(window).height();
	var totHt=$('html,body').height();
	var section=$('section');
	var totSize=section.size();
	
	/* 아래 방향 화살표 클릭 */
	$('#main .img04 img').click(function(){
		$('html,body').stop().animate({scrollTop:totHt},30000,'swing');
	});
	/* 위 방향 화살표 클릭 */
	$('.top_btn').click(function(){
		$('html,body').stop().animate({scrollTop:0},5000,'swing');
	});
	
	/* 마우스 오버 시 이미지 전환 */
	$('.select>a').on('mouseenter',function(){
		$(this).children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.png'));
	}).on('mouseleave',function(){
		$(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on.png','.png'));
	});
	
	$(window).on('scroll',function(e){
		scrollEvt();
	});
	
	function scrollEvt(){
		scrollLocate=$(window).scrollTop();
		scrollAni()
	}
	
	function scrollAni(){
		/* scene01 */
		$('#scene01 .img02').stop().css({'height':scrollLocate-1848});
		if(scrollLocate>1848 && scrollLocate<2868){
			$('#scene01 > div').stop().css({'position':'fixed','top':'0'});
		}else if(scrollLocate>=2868){
			$('#scene01 > div').stop().css({'position':'absolute','top':'1020px'});
		}else{
			$('#scene01 > div').stop().css({'position':'absolute','top':'0'});
		};
		/* scene02 */
		$('#scene02 .img02').stop().css({'height':scrollLocate-3888});
		if(scrollLocate>=3888 && scrollLocate<5273){
			$('#scene02 > div').stop().css({'position':'fixed','top':'0'});
		}else if(scrollLocate>=5273){
			$('#scene02 > div').stop().css({'position':'absolute','top':'1385px'});
		}else{
			$('#scene02 > div').stop().css({'position':'absolute','top':'0'});
		};
		/* scene03 */
		$('#scene03 .img02').stop().css({'height':scrollLocate-6658});
		if(scrollLocate>=6658 && scrollLocate<7910){
			$('#scene03 > div').stop().css({'position':'fixed','top':'0'});
		}else if(scrollLocate>=7910){
			$('#scene03 > div').stop().css({'position':'absolute','top':'1245px'});
		}else{
			$('#scene03 > div').stop().css({'position':'absolute','top':'0'});
		};
		/* scene04 */
		$('#scene04 .img02').stop().css({'height':scrollLocate-9138});
		if(scrollLocate>=9138 && scrollLocate<10660){
			$('#scene04 > div').stop().css({'position':'fixed','top':'0'});
			$('#scene04 .img02').stop().css({'position':'fixed','top':'-145px'});
		}else if(scrollLocate>=10660){
			$('#scene04 > div').stop().css({'position':'absolute','top':'1315px'});
		}else{
			$('#scene04 > div').stop().css({'position':'absolute','top':'0'});
		};
		/* scene05 */
		$('#scene05 .img02').stop().css({'height':scrollLocate-11772});
		if(scrollLocate>=11772 && scrollLocate<13260){
			$('#scene05 > div').stop().css({'position':'fixed','top':'0'});
			$('#scene05 .img02').stop().css({'position':'fixed','top':'-147px'});
		}else if(scrollLocate>=13260){
			$('#scene05 > div').stop().css({'position':'absolute','top':'1317px'});
		}else{
			$('#scene05 > div').stop().css({'position':'absolute','top':'0'});
		};
		/* scene06 */
		$('#scene06 .img02').stop().css({'height':scrollLocate-14422});
		if(scrollLocate>=14422 && scrollLocate<15700){
			$('#scene06 > div').stop().css({'position':'fixed','top':'0'});
			$('#scene06 .img02').stop().css({'position':'fixed','top':'-144px'});
		}else if(scrollLocate>=15700){
			$('#scene06 > div').stop().css({'position':'absolute','top':'1080px'});
		}else{
			$('#scene06 > div').stop().css({'position':'absolute','top':'0'});
		};
		
		$('#scene02 .img03').stop().css({'opacity':(scrollLocate-5050)*0.001});
		$('#scene03 .img03').stop().css({'opacity':(scrollLocate-7450)*0.001});
		$('#scene04 .img03').stop().css({'opacity':(scrollLocate-10150)*0.001});
		$('#scene05 .img03').stop().css({'opacity':(scrollLocate-12850)*0.001});
		$('#scene06 .img03').stop().css({'opacity':(scrollLocate-15350)*0.001});
		$('#scene07 .img01').stop().css({'opacity':(scrollLocate-16150)*0.001});
		$('#scene07 .img02').stop().css({'opacity':(scrollLocate-16250)*0.001});
		$('#scene08 .img01').stop().css({'opacity':(scrollLocate-17250)*0.001});
		$('#scene08 .img02').stop().css({'opacity':(scrollLocate-17250)*0.001});
		
		/* 글자 움직임 */
		if(scrollLocate<2687){
			$('#scene01 .txt01').stop().css({'margin-left':(-(scrollLocate-2980)*1)})
		}
		if(scrollLocate>3890 && scrollLocate<4900){
			$('#scene02 .txt01').stop().css({'margin-right':(-(scrollLocate-5300)*1)})
		}
		if(scrollLocate>6600 && scrollLocate<7700){
			$('#scene03 .txt01').stop().css({'margin-right':(-(scrollLocate-7800)*1)})
		}
		if(scrollLocate>9000 && scrollLocate<10000){
			$('#scene04 .txt01').stop().css({'margin-right':(-(scrollLocate-10400)*1)})
		}
		if(scrollLocate>11700 && scrollLocate<12800){
			$('#scene05 .txt01').stop().css({'margin-right':(-(scrollLocate-13000)*1)})
		}
		if(scrollLocate>14400 && scrollLocate<15500){
			$('#scene06 .txt01').stop().css({'margin-right':(-(scrollLocate-15850)*1)})
		}
		
	
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
})