$(function(){
	if($(window).scrollTop()<=850){
		$('.main_nav>.m_n_down').click(function(){
		$('html').stop().animate({"scrollTop":851},400)
		return false;
		});
	};
	$(window).scroll(function(){
		sct=$(window).scrollTop();
		
		if(sct>0){
			$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');
		};
		
		sct0=0;
		sct1=851;
		sct2=1781;
		sct3=2721;
		sct4=3671;
		sct5=4800;
		
		if(sct<=850){
			$('.main_nav li').removeClass('active');
			$('.main_nav li').eq(0).addClass('active');
			$('.main_nav>.m_n_up').click(function(){
				return false;
			});
			$('.main_nav>.m_n_down').click(function(){
				$('html').stop().animate({"scrollTop":sct1},400)
				return false;
			});
		}else if(sct>850 && sct<=1780){
			$('.main_nav li').removeClass('active');
			$('.main_nav li').eq(1).addClass('active');
			$('.main_nav>.m_n_up').click(function(){
				$('html').stop().animate({"scrollTop":sct0},400);
				return false;
			});
			$('.main_nav>.m_n_down').click(function(){
				$('html').stop().animate({"scrollTop":sct2},400)
				return false;
			});
		}else if(sct>1780 && sct<=2720){
			$('.main_nav li').removeClass('active');
			$('.main_nav li').eq(2).addClass('active');
			$('.main_nav>.m_n_up').click(function(){
				$('html').stop().animate({"scrollTop":sct1},400);
				return false;
			});
			$('.main_nav>.m_n_down').click(function(){
				$('html').stop().animate({"scrollTop":sct3},400)
				return false;
			});
		}else if(sct>2720 && sct<=3670){
			$('.main_nav li').removeClass('active');
			$('.main_nav li').eq(3).addClass('active');
			$('.main_nav>.m_n_up').click(function(){
				$('html').stop().animate({"scrollTop":sct2},400);
				return false;
			});
			$('.main_nav>.m_n_down').click(function(){
				$('html').stop().animate({"scrollTop":sct4},400)
				return false;
			});
		}else if(sct>3670 && sct<=4000){
			$('.main_nav li').removeClass('active');
			$('.main_nav li').eq(4).addClass('active');
			$('.main_nav>.m_n_up').click(function(){
				$('html').stop().animate({"scrollTop":sct3},400);
				return false;
			});
			$('.main_nav>.m_n_down').click(function(){
				$('html').stop().animate({"scrollTop":sct5},600)
				return false;
			});
		}else if(sct>3800){
			$('.main_nav li').removeClass('active');
			$('.main_nav li').eq(5).addClass('active');
			$('.main_nav>.m_n_up').click(function(){
				$('html').stop().animate({"scrollTop":sct4},400);
				return false;
			});
			$('.main_nav>.m_n_down').click(function(){
				return false;
			});
		};
	})
	
	
	$('.gnb_search a').click(function(){
		$('#search_mold').addClass('active');
		return false;
	});
	$('.search_close a').click(function(){
		$('#search_mold').removeClass('active');
		return false;
	});

	
	$('.main_nav ul li').click(function(){
		var num=$(this).index();
		var sctAty=[0,851,1781,2721,3671,4800];
		var sct_num=sctAty[num]
		$('html').stop().animate({"scrollTop":sct_num},400);
		return false;
	});
		
	$('.top_lang ul').hide();
	$('.top_lang button').click(function(){
	   var th=$(this).next('ul')
	   if(th.is(':visible')){
		   th.hide();
	   }else{
		   th.show();
	   }
	});
   
   $('.search_text').each(function(){
	   var guideText=this.defaultValue;
	   //var guideText=$(this).val();
	   var element=$(this);
	   
	   if(element.val()==guideText){
		   element.addClass('guide');
	   };
	   
	   element.focus(function(){
		   if(element.val()==guideText){//한 글자도 입력하지 않았을 때=기본 상태일 때
			   element.val('');
			   element.removeClass('guide')
			}
	   });
	   element.blur(function(){
			if(element.val()===''){//클릭했으나 내용을 안 쓰고 나갔을 때 
			   element.val(guideText);
			   element.addClass('guide');
			}
	   });
	   
	});
	
   $('.extend_display').hide();
   $('.search_extend').click(function(){
	   var th=$(this).find('.extend_display');
	   if(th.is(':visible')){
		   th.fadeOut('fast');
	   }else{
		   th.fadeIn('fast');
	   }
   });
   $('.extend_display>button').click(function(){
	   $('.extend_display').fadeOut('fast');
	   return false;
   });
 
   $('.gnb_depth2 ul ul').hide();
   $('.depth3_open').click(function(){
		var color=$(this).prev('a')
		var th=$(this).next('ul')
		if(th.is(':visible')){
		   th.slideUp('fast');
		   color.removeClass('active');
		   $(this).css({background:'url(images/icon_plus_2.gif) center center'});
		}else{
		   th.slideDown('fast');
		   color.addClass('active');
		   $(this).css({background:'url(images/icon_minus_2.gif) center center'});
		}
   });
	
	function moveSlider(index){
		var willMoveLeft=index*-860;

		$('.main_slide .slidebox').animate({left:willMoveLeft},'slow');//이미지 슬라이드
		
		$('.main_slide .ctrler_dot button[data-index='+index+']').addClass('active');
		$('.main_slide .ctrler_dot button[data-index!='+index+']').removeClass('active'); //버튼 활성화
		
	}
	
	$('.main_slide .ctrler_dot button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index=$(this).attr('data-index');
		moveSlider(index)
	});//버튼 클릭시 인덱스를 클릭된 버튼으로 변경, 변경된 index로 moveSlider(index) 즉시 다시 실행
	
	moveSlider(0);
	
	var visual=$('.main_slide .slidebox > a');
	var button=$('.main_slide .ctrler_dot button');
	var current=0;
	var setIntervalId;
	
	button.on({click:function(){
		var tg=$(this);//클릭된 버튼
		var i=tg.index();//클릭된 버튼의 순번
		
		button.removeClass('active');//다른버튼 비활성화
		tg.addClass('active');
		 moveM(i)//선택된 순번에 맞게 이미지 슬라이드하기
	}
	});
	
	function moveM(i){//자동슬라이드를 위해 이미지 움직이는 함수를 다시 만듦
		var currentEl=visual.eq(current);//새로고침시 처음 보이는 이미지
		var nextEl=visual.eq(i);//클릭된 버튼의 순번에 해당하는 이미지를, 이제 보여야 하는 nextEl로 설정
		
		currentEl.css({left:0}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:0}); //클릭된 버튼에 해당하는 이미지를 보여줌
		
		current=i; //슬라이드가 완료된, 클릭되었던 이미지를 현재이미지로 삼음
	}
	
	timer() //사용자 정의 함수이므로 불러서 실행 명령
	function timer(){
		setIntervalId=setInterval(function(){//clearInterval을 사용하기 위해 setIntervalId이라는 변수 지정
			var n=current+1; //현재 보이는 이미지의 다음 이미지의 순번
			if(n==visual.size()){
				n=0;//순번의 끝(2)를 넘으면(3), 0(첫번째)으로 초기화
			}
			button.eq(n).trigger('click');//다음 순번의 버튼에 클릭이벤트 강제 발생
		},3000);	
	}
	
	var M_num=1;
	$('.main_slide .ctrler button').click(function(){
		if(M_num<=1){
			$(this).addClass('play')
			clearInterval(setIntervalId);
			M_num++;
		}else{
			$(this).removeClass('play')
			timer();
			M_num--;
		}
	});
  
  
  //팝업존
	$('.main_s2 .popup').each(function(){
		function moveSliderP(index){
			var willMoveLeftP=index*-320;

			$('.s2_slidebox').animate({left:willMoveLeftP},'slow');//이미지 슬라이드
			
			$('.popup .ctrler_dot button[data-index='+index+']').addClass('active');
			$('.popup .ctrler_dot button[data-index!='+index+']').removeClass('active'); //버튼 활성화
			
		}
		
		$('.popup .ctrler_dot button').each(function(index){
			$(this).attr('data-index',index);
		}).click(function(){
			var index=$(this).attr('data-index');
			moveSliderP(index)
		});//버튼 클릭시 인덱스를 클릭된 버튼으로 변경, 변경된 index로 moveSliderP(index) 즉시 다시 실행
		
		moveSliderP(0);
		
		var visual=$('.popup .s2_slidebox > a');
		var button=$('.popup .ctrler_dot button');
		var currentP=0;
		var setIntervalId;
		
		button.on({click:function(){
			var tg=$(this);//클릭된 버튼
			var i=tg.index();//클릭된 버튼의 순번
			
			button.removeClass('active');//다른버튼 비활성화
			tg.addClass('active');
			 moveP(i)//선택된 순번에 맞게 이미지 슬라이드하기
		}
		});
		
		function moveP(i){//자동슬라이드를 위해 이미지 움직이는 함수를 다시 만듦
			var currentEl=visual.eq(currentP);//새로고침시 처음 보이는 이미지
			var nextEl=visual.eq(i);//클릭된 버튼의 순번에 해당하는 이미지를, 이제 보여야 하는 nextEl로 설정
			
			currentEl.css({left:0}).stop().animate({left:'-100%'});
			nextEl.css({left:'100%'}).stop().animate({left:0}); //클릭된 버튼에 해당하는 이미지를 보여줌
			
			currentP=i; //슬라이드가 완료된, 클릭되었던 이미지를 현재이미지로 삼음
		}
		
		timerP() //사용자 정의 함수이므로 불러서 실행 명령
		function timerP(){
			setIntervalIdP=setInterval(function(){//clearInterval을 사용하기 위해 setIntervalId이라는 변수 지정
				var n=currentP+1; //현재 보이는 이미지의 다음 이미지의 순번
				if(n==visual.size()){
					n=0;//순번의 끝(2)를 넘으면(3), 0(첫번째)으로 초기화
				}
				button.eq(n).trigger('click');//다음 순번의 버튼에 클릭이벤트 강제 발생
			},3000);	
		}
		
		var P_num=1;
		$('.popup .ctrler button').click(function(){
			if(P_num<=1){
				$(this).addClass('play')
				clearInterval(setIntervalIdP);
				P_num++;
			}else{
				$(this).removeClass('play')
				timerP();
				P_num--;
			}
		}); 
	});	

	$('.m5_slide').each(function(){
		var m5_img=$('.m5_slidebox a');
		var m5_control=$('.m5_slide .ctrler button');
		
		m5_img.not(':first').hide();
		var m5_onButton=$('.m5_slide .m5_ctrler_dot button:first');
		
		$('.m5_slide .m5_ctrler_dot button').click(function(){
			tg=$(this);
			
			$('.m5_slidebox a:visible').fadeOut(200);
			var num=$('.m5_slide .m5_ctrler_dot button').index(this);//선택한 버튼의 순번 담기
			$(m5_img).eq(num).fadeIn(200);
			
			m5_onButton.removeClass('active');
			tg.addClass('active');
			
			m5_onButton=$(this)
			m5_btnNum=$('.m5_slide .m5_ctrler_dot button').index(this);
		});
		
		var m5_btnNum=0;

		function autoPlay(){
			m5_btnNum++;
			
			if(m5_btnNum>=6){
				m5_btnNum=0;
			}
			$('.m5_slide>.m5_ctrler_dot>button').eq(m5_btnNum).trigger('click');
			auto1=setTimeout(autoPlay,2000);
		}
		auto1=setTimeout(autoPlay,2000);
		
		var m5_num=1;
		m5_control.click(function(){
			if(m5_num<=1){
				$(this).addClass('play');
				clearTimeout(auto1);
				m5_num++;
			}else{
				$(this).removeClass('play');
				auto1=setTimeout(autoPlay,2000);
				m5_num--;
			}
		});
	});
});