$(function(){
	
	/* 메뉴바 */
	$('#gnb>li').hover(function(){
		$('#gnb>li').removeClass('on');
	},function(){
		$('#gnb>li').eq(0).addClass('on');
	})
	$('#gnb .depth2>li').hover(function(){
		if($('#gnb .dep3_bg').is(':visible')) {
			$('#header .overlay').show();
		}
	},function(){
		$('#header .overlay').hide();
	})
	
	/* 서치, 사이트맵 호버시 색바뀜 */
	$('#header .all_search').hover(function(){
		$(this).css('background-position','100% 100%');
	},function(){
		$(this).css('background-position','100% 0');
	});
	$('#header .sitemap').hover(function(){
		$(this).css('background-position','0 100%');
	},function(){
		$(this).css('background-position','0 0');
	});
	
	/* 메인 슬라이드 */
	var current=0;
	var i;
	function mainslide(){
		current++;
		var slide=$('#main .main_slider .slide')
		move(slide,current);
		$('#main .main_slider .slide_title>li').removeClass();
		$('#main .main_slider .slide_title>li').eq(current).addClass('on');
		if(current==5){$('#main .main_slider .slide_title>li').eq(0).addClass('on');}
		if(current==6){
			current=0; 
			slide.css({'transform':'translate3d(0,0px,0)','transition-duration':'0s'});
			autoplay=setTimeout(mainslide,0);
		}else{
			autoplay=setTimeout(mainslide,3000);
		}
	}
	autoplay=setTimeout(mainslide,3000);
	
	function move(tg,index){
		tg.css({'transform':'translate3d(0,' + -(430*index) + 'px,0)','transition-duration':'.5s'})
	}
	/* 메인 슬라이드 타이틀 클릭 */
	$('#main .main_slider .slide_title>li').click(function(){
		i=$(this).index();
		$('#main .main_slider .slide_title>li').removeClass();
		$(this).addClass('on');
		move($('#main .main_slider .slide'),i);
		current=i;
		return false;
	});
	/* 메인 슬라이드 컨트롤러 */
	$('.main_slider .controls .stop').click(function(){
		$('.main_slider .controls a').removeClass('active');
		$(this).addClass('active');
		clearTimeout(autoplay);
		return false;
	});
	$('.main_slider .controls .start').click(function(){
		$('.main_slider .controls a').removeClass('active');
		$(this).addClass('active');
		autoplay=setTimeout(mainslide,1000);
		return false;
	});
	
	/* 탭 */
	$('#main .tab_category>li').click(function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		var tabI=$(this).index();
		var cont=$(this).parent('ul').next('.tab_conts').find('.cont');
		cont.hide();
		cont.eq(tabI).show();
		return false;
	});
	
	/* 콘텐츠 슬라이드 사용자 함수 */
	function rolling(tg,width,j){
		tg.siblings().removeClass('disabled');
		tg.parent('.box_controls').siblings().find('.box_slide').css({'transform':'translate3d('+ (-(width*j)) + 'px,0,0)','transition-duration':'.5s'});
	}
	
	/* 콘텐츠 슬라이드 다음 버튼 */
	var box1_num=0;
	$('#main .sec1 .cont1 .box_controls .next').click(function(){
		if(box1_num>=3){return false;}else if(box1_num>=2){
			$(this).addClass('disabled');
		}
		box1_num++;
		rolling($(this),610,box1_num);
		return false;
	});
	var box2_num=0;
	$('#main .sec1 .cont2 .box_controls .next').click(function(){
		if(box2_num>=3){return false;}else if(box2_num>=2){
			$(this).addClass('disabled');
		}
		box2_num++;
		rolling($(this),610,box2_num);
		return false;
	});
	var box3_num=0;
	$('#main .sec2 .cont3 .box_controls .next').click(function(){
		if(box3_num>=6){return false;}else if(box3_num>=5){
			$(this).addClass('disabled');
		}
		box3_num++;
		rolling($(this),305,box3_num);
		return false;
	});
	var box4_num=0;
	$('#main .sec2 .cont4 .box_controls .next').click(function(){
		if(box4_num>=6){return false;}else if(box4_num>=5){
			$(this).addClass('disabled');
		}
		box4_num++;
		rolling($(this),305,box4_num);
		return false;
	});
	var box5_num=0;
	$('#main .sec2 .cont5 .box_controls .next').click(function(){
		if(box5_num>=6){return false;}else if(box5_num>=5){
			$(this).addClass('disabled');
		}
		box5_num++;
		rolling($(this),305,box5_num);
		return false;
	});
	var box6_num=0;
	$('#main .sec2 .cont6 .box_controls .next').click(function(){
		if(box6_num>=6){return false;}else if(box6_num>=5){
			$(this).addClass('disabled');
		}
		box6_num++;
		rolling($(this),305,box6_num);
		return false;
	});

	/* 콘텐츠 슬라이드 이전 버튼 */
	$('#main .sec1 .cont1 .box_controls .prev').click(function(){
		if(box1_num<=0){return false;}else if(box1_num<=1){
			$(this).addClass('disabled');
		}
		box1_num--;
		rolling($(this),610,box1_num);
		return false;
	});
	$('#main .sec1 .cont2 .box_controls .prev').click(function(){
		if(box2_num<=0){return false;}else if(box2_num<=1){
			$(this).addClass('disabled');
		}
		box2_num--;
		rolling($(this),610,box2_num);
		return false;
	});
	$('#main .sec2 .cont3 .box_controls .prev').click(function(){
		if(box3_num<=0){return false;}else if(box3_num<=1){
			$(this).addClass('disabled');
		}
		box3_num--;
		rolling($(this),305,box3_num);
		return false;
	});
	$('#main .sec2 .cont4 .box_controls .prev').click(function(){
		if(box4_num<=0){return false;}else if(box4_num<=1){
			$(this).addClass('disabled');
		}
		box4_num--;
		rolling($(this),305,box4_num);
		return false;
	});
	$('#main .sec2 .cont5 .box_controls .prev').click(function(){
		if(box5_num<=0){return false;}else if(box5_num<=1){
			$(this).addClass('disabled');
		}
		box5_num--;
		rolling($(this),305,box5_num);
		return false;
	});
	$('#main .sec2 .cont6 .box_controls .prev').click(function(){
		if(box6_num<=0){return false;}else if(box6_num<=1){
			$(this).addClass('disabled');
		}
		box6_num--;
		rolling($(this),305,box6_num);
		return false;
	});
	
	/* 콘텐츠 슬라이드 페이저 */
	$('#main .sec4 .box_pager .pager_dot').click(function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		var page=$(this).index();
		$(this).parent('.box_pager').siblings('.box_slide').css({'transform':'translate3d('+ (-(1200*page)) + 'px,0,0)','transition-duration':'.5s'});
		return false;
	});
	
	/* 푸터 사이트링크 */
	toggle_num=1
	$('#footer .tel .sitelink').click(function(){
		if(toggle_num<=1){
			$(this).find('ul').show();
			toggle_num++
		}else{
			$(this).find('ul').hide();
			toggle_num--
		}
	});
	
	/* 사이드바 */
	$(window).on('scroll',function(e){
		scrollEvt();
	});
	function scrollEvt(){
		if($(window).scrollTop()<200){
			$('#footer .side .top').stop().slideUp();
		}else{
			$('#footer .side .top').stop().slideDown();
		}
	}
	$('#footer .side .top').click(function(){
		$('html,body').stop().animate({scrollTop:0});
		return false;
	});
	
});