$(function(){
	/* 팝업 닫을 시 헤더 이동 */
	$('#popup button').click(function(){
		$('#header').stop().animate({top:0},300);
		$('#popup').stop().slideUp(300);
		return false;
	});
	/* 스크롤탑 따라 nav 색, 밑줄 변경 */
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		if(sct>=$('#about_me').offset().top-80){
			$('#header').removeClass('active');
			$('.top_go').fadeIn('fast');
		}else{
			$('#header').addClass('active');
			$('.top_go').fadeOut('fast');
		};
		/* 스크롤탑 배열 */
		var sctAry=[0,$('#about_me').offset().top-160,$('#skills').offset().top-160,$('#portfolio').offset().top-124,$(document).height()-$(window).height()];
		if(sct<sctAry[1]){
			$('.nav li').removeClass('active');
			$('.nav li').eq(0).addClass('active');
			$('.nav_under').stop().animate({width:42,left:620},{duration:150, easing:'easeOutCubic'});
		}else if(sct>=sctAry[1] && sct<sctAry[2]){
			$('.nav li').removeClass('active');
			$('.nav li').eq(1).addClass('active');
			$('.nav_under').stop().animate({width:86,left:728},{duration:150, easing:'easeOutCubic'});
		}else if(sct>=sctAry[2] && sct<sctAry[3]){
			$('.nav li').removeClass('active');
			$('.nav li').eq(2).addClass('active');
			$('.nav_under').stop().animate({width:42,left:878},{duration:150, easing:'easeOutCubic'});
		}else if(sct>=sctAry[3] && sct<sctAry[4]){
			$('.nav li').removeClass('active');
			$('.nav li').eq(3).addClass('active');
			$('.nav_under').stop().animate({width:80,left:980},{duration:150, easing:'easeOutCubic'});
		}else if(sct>=sctAry[4]){
			$('.nav li').removeClass('active');
			$('.nav li').eq(4).addClass('active');
			$('.nav_under').stop().animate({width:50,left:1125},{duration:150, easing:'easeOutCubic'});
		};
		/* 스크롤탑 따라 스킬무브 실행 */
		if(sct>=$('#skills').offset().top-700){
			skillMove()
		}else{
			skillReset()
		}; 
	});
	/* nav 클릭 시 스크롤 이동 */
	$('.nav li').click(function(){
		if($(this).is('.diary')){
			
		}else{
			var num=$(this).index();
			var sctAry=[0,$('#about_me').offset().top-80,$('#skills').offset().top-120,$('#portfolio').offset().top-120,$(document).height()-$(window).height()];
			var sct_num=sctAry[num]
			$('html').stop().animate({"scrollTop":sct_num},{duration:850, easing:'easeInOutCubic'});
			return false;
		}
	});
	
	/* 인트로 목업 자동스크롤 실행 */
	for(var i = 0; i < 20; i++) {
		intromove($('#intro .box1 .imgcontainer'),430,2000,1500,3700);
		intromove($('#intro .box3 .imgcontainer'),150,1400,0,1800);
		intromove($('#intro .box6 .imgcontainer'),55,1000,3700,2000);
	}
	function intromove(tg,movetop,time,delay1,delay2){
		tg.find('img').delay(delay1).animate({top:-movetop+"px"},{duration:time, deasing:'easeInQuad'}).delay(delay2).animate({top:0},{duration:time, deasing:'easeInQuad'}).delay(delay2);
	}
	
	/* 오버레이 캡션 이동 */
	$('#portfolio').on('mouseenter mouseleave', '.port_list', hoverDirection);
	function hoverDirection (event) {
		var overlay = $(this).find('.caption'),
			side = getMouseDirection(event),
			animateTo,
			positionIn = {
				top:  '0%',
				left: '0%'
			},
			positionOut = (function () {
				switch (side) {
					
					case 0:  return { top: '-100%', left:    '0%' }; break; // 
					case 1:  return { top:    '0%', left:  '100%' }; break; // 
					case 2:  return { top:  '100%', left:    '0%' }; break; // 
					default: return { top:    '0%', left: '-100%' }; break; // 
				}
			})();
		if (event.type === 'mouseenter') {
			animateTo = positionIn;
			overlay.css(positionOut);
		} else {
			animateTo = positionOut;
		}
		overlay.stop(true).animate(animateTo, 220, 'easeOutExpo');
	}
	// 마우스의 방향을 감지하는 함수
	function getMouseDirection (event) {
		var $el = $(event.currentTarget),
			offset = $el.offset(),
			w = $el.outerWidth(),
			h = $el.outerHeight(),
			x = (event.pageX - offset.left - w / 2) * ((w > h)? h / w: 1),
			y = (event.pageY - offset.top - h / 2) * ((h > w)? w / h: 1),
			direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90  + 3) % 4;
		return direction;
	};
	
	// 모달 창
	$('#portfolio .port_list button').click(function(){
		var i=$(this).parents('.port_list').index();
		$('html').css('overflow','hidden');
		$('#modal_wrap').fadeIn(300);
		$('#modal_wrap .modal').eq(i-2).slideDown(300);
	});
	$('#modal_wrap .modal_bg, #modal_wrap .modal .close').click(function(){
		$('html').css('overflow','auto');
		$('#modal_wrap').fadeOut(300);
		$('#modal_wrap .modal').slideUp(300);
	});
	
	/* 모바일 목업 클릭시 작은 창 */
	$('#portfolio .port06 a, #modal_wrap .modal06 h3 a, #modal_wrap .modal06 .modal_inner a').click(function(){
		window.open('project08/index.html', 'banner','width=360,height=600,top=200,left=560');
		return false;
	});
	$('#portfolio .port07 a, #modal_wrap .modal07 h3 a, #modal_wrap .modal07 .modal_inner a').click(function(){
		window.open('m/index.html', 'banner','width=400,height=600,top=200,left=400');
		return false;
	});
	
	/* 스킬 차오르는 효과 함수 */
	function skillMove(){
		if($('#skills .skills').hasClass('active')==false){
			$('#skills .skills li').each(function(i){
				var chart=$(this),
				percentNumber=chart.find('.skill_number'),
				percentData=percentNumber.text(),
				percentMove=96-percentData;
				percentNumber.text(0);
				$({percent:0}).delay(100*i).animate({percent:percentData},{duration:1500, progress:function(){
					var now=this.percent
					percentNumber.text(Math.floor(now));
				}
				});
				chart.find('.move').delay(200*i).animate({top:percentMove-6+"px",left:-588+(percentMove*1.5)+"px"},1500);
			});
		};
		$('#skills .skills').addClass('active')
	};
	var resetData = [90,90,85,80,40,45,75]
	function skillReset(){
		if($('#skills .skills').hasClass('active')==true){
			$('#skills .skills li').each(function(i){
				var chart = $(this);
				chart.find('.move').stop().css({'top':'120px','left':'120px'});
				chart.find('.skill_number').stop().text(resetData[i]);
			});
		};
		$('#skills .skills').removeClass('active');
	};
	
	/* 최상단으로 이동 */
	$('.top_go a').click(function(){
		$('html').stop().animate({"scrollTop":0},{duration:650, easing:'easeInOutCubic'});
		return false;
	})
	
});