$(function(){
	
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		if(sct>0){
			$('#header').css('transform','translate(0px,-204px)')
		}else{
			$('#header').css('transform','translate(0px,0px)')
		}
	})
	
	$('#localMenu .nav li').hover(function(){
		if(open_num>1){return false;}
		$(this).find('.dep2').stop().slideDown(300);
		$('.nav_overlay').show();
	},function(){
		if(open_num>1){return false;}
		$(this).find('.dep2').hide();
		$('.nav_overlay').fadeOut(300);
	});
	open_num=1;
	$('#localMenu .search_open .btn_search_open').click(function(){
		if(open_num<=1){
			$(this).addClass('active');
			$(this).next('.header_search').show();
			$('.nav_overlay').fadeIn(300);
			open_num++;
		}else{
			$(this).removeClass('active');
			$(this).next('.header_search').hide();
			$('.nav_overlay').fadeOut(300);
			open_num--;
		};
	});
	
	$('.input_inner input').on('focus',function(){
		$(this).css('background-position','0 -50px');
	});
	$('.input_inner input').on('blur',function(){
		if($(this).val()==''){
			$(this).css('background-position','0 center');
		}
	});
	
	$('.nav_overlay').click(function(){
		$('#localMenu .btn_search_open').removeClass('active');
		$('.header_search').hide();
		$('.nav_overlay').fadeOut(300);
		open_num=1;
	});
	
	$('.cardPager li').click(function(){
		var tg=$(this);
		var par=$(this).parents('.cardPager');
		var slide=par.prev('.sliderbox').children('li');
		var num=par.children('li').index(this);
		slide.fadeOut(200);
		slide.eq(num).fadeIn(200);
		
		par.children('li').removeClass('active');
		tg.addClass('active');
		return false;
	});
	cardSlide();
	function cardSlide(){
		setIntervalCard=setInterval(function(){
			current1=$('.card_slide .cardPager li').filter('.active').index();
			current1++;
			if(current1>=$('.card_sliderbox>li').size()){
				current1=0;
			}
			$('.card_slide .cardPager li').eq(current1).trigger('click');
		},4000);
	}
	$('.card_slide .slideControll a.pause').click(function(){
		clearInterval(setIntervalCard);
		$(this).hide();
		$(this).next('.play').show();
		return false;
	});
	$('.card_slide .slideControll a.play').click(function(){
		cardSlide();
		$(this).hide();
		$(this).prev('.pause').show();
		return false;
	});

	Slide2()
	function Slide2(){
		setInterval2=setInterval(function(){
			current2=$('.finance_area .cardPager li').filter('.active').index();
			current2++;
			if(current2>=$('.sliderbox2>li').size()){
				current2=0;
			}
			$('.finance_area .cardPager li').eq(current2).trigger('click');
		},4000);
	}
	$('.finance_area .slideControll a.pause').click(function(){
		clearInterval(setInterval2);
		$(this).hide();
		$(this).next('.play').show();
		return false;
	});
	$('.finance_area .slideControll a.play').click(function(){
		Slide2();
		$(this).hide();
		$(this).prev('.pause').show();
		return false;
	});
	
	Slide3()
	function Slide3(){
		setInterval3=setInterval(function(){
			current3=$('.culture_banner .cardPager li').filter('.active').index();
			current3++;
			if(current3>=$('.slidebox3>li').size()){
				current3=0;
			}
			$('.culture_banner .cardPager li').eq(current3).trigger('click');
		},4000);
	}
	$('.culture_banner .slideControll a.pause').click(function(){
		clearInterval(setInterval3);
		$(this).hide();
		$(this).next('.play').show();
		return false;
	});
	$('.culture_banner .slideControll a.play').click(function(){
		Slide3();
		$(this).hide();
		$(this).prev('.pause').show();
		return false;
	});

	Slide4()
	function Slide4(){		
		setInterval4=setInterval(function(){
			current4=$('.project_banner .cardPager li').filter('.active').index();
			current4++;
			if(current4>=$('.slidebox4>li').size()){
				current4=0;
			}
			$('.project_banner .cardPager li').eq(current4).trigger('click');
		},4000);
	}
	$('.project_banner .slideControll a.pause').click(function(){
		clearInterval(setInterval4);
		$(this).hide();
		$(this).next('.play').show();
		return false;
	});
	$('.project_banner .slideControll a.play').click(function(){
		Slide4();
		$(this).hide();
		$(this).prev('.pause').show();
		return false;
	});

	Slide5()
	function Slide5(){		
		setInterval5=setInterval(function(){
			current5=$('.event_banner .cardPager li').filter('.active').index();
			current5++;
			if(current5>=$('.slidebox5>li').size()){
				current5=0;
			}
			$('.event_banner .cardPager li').eq(current5).trigger('click');
		},4000);
	}
	$('.event_banner .slideControll a.pause').click(function(){
		clearInterval(setInterval5);
		$(this).hide();
		$(this).next('.play').show();
		return false;
	});
	$('.event_banner .slideControll a.play').click(function(){
		Slide5();
		$(this).hide();
		$(this).prev('.pause').show();
		return false;
	});
	
	$('.notice .bbs_controll .next').click(function(){
		noticeNum=$('.notice .bbs_list li').filter(':visible').index();
		noticeNum++;
		if (noticeNum==$('.notice .bbs_list li').size()){noticeNum=0;}
		$('.notice .bbs_list li').hide();
		$('.notice .bbs_list li').eq(noticeNum).show();
		$('.notice .bbs_pager p').hide();
		$('.notice .bbs_pager p').eq(noticeNum).show();
		return false;
	});
	$('.notice .bbs_controll .prev').click(function(){
		noticeNum=$('.notice .bbs_list li').filter(':visible').index();
		noticeNum--;
		if (noticeNum<0){noticeNum=$('.notice .bbs_list li').size()-1}
		$('.notice .bbs_list li').hide();
		$('.notice .bbs_list li').eq(noticeNum).show();
		$('.notice .bbs_pager p').hide();
		$('.notice .bbs_pager p').eq(noticeNum).show();
		return false;
	});
	
	
	$('#footer .site button').click(function(){
		$(this).addClass('active');
		$(this).next('.selectbox').show();
		$('#footer .overlay_foot').show();
	});

	$('#footer .overlay_foot').click(function(){
		if($('.selectbox').is(':visible')){
			$('#footer .site button').removeClass('active');
			$('.selectbox').hide();
			$(this).hide();
		}
	});
});