$(function(){
	window.mySwipe=$('#mySwipe').Swipe({
		auto:3000,
		continous:true,
		callback:function(index, element){
			$('.touch_bullet .active').attr('src',$('.touch_bullet .active').attr('src').replace('on.png','off.png')).removeClass('active');
			$('.touch_bullet img').eq(index).attr('src',$('.touch_bullet img').eq(index).attr('src').replace('off.png','on.png')).addClass('active')
		}
	}).data('Swipe');
	
	$('.touch_left_btn a').click(function(){
		mySwipe.prev();
		return false;
	});
	$('.touch_right_btn a').click(function(){
		mySwipe.next();
		return false;
	});
	
	
	/* 롤링 버튼 배너 */ //클릭하면 src 변경
	$('#roll_banner_wrap dd').not(':first').hide();
	var onBtn=$('#roll_banner_wrap dt a:first');
	$('#roll_banner_wrap dt a').on('click',function(){
		$('#roll_banner_wrap dd:visible').hide();
		$('img',onBtn).attr('src',$('img',onBtn).attr('src').replace('over.png','out.png'));
		var num=$('#roll_banner_wrap dt a').index(this);
		$('#roll_banner_wrap dd').eq(num).show();
		$('img',this).attr('src',$('img',this).attr('src').replace('out.png','over.png'));
		onBtn=$(this);
		return false;
	});
	var btnNum=0;
	function autoPlay(){
		btnNum++;
		if(btnNum>=7){btnNum=0;} //객체에 변수지정을 안 해서 7이라는 숫자를 직접 씀. 이미지 증가 혹은 감소 시 수정 요함
		$('#roll_banner_wrap dt a').eq(btnNum).trigger('click');
		auto1=setTimeout(autoPlay,2000);//재귀적 호출
	}
	autoPlay();
	
	$('.playBtn').click(function(){
		clearTimeout(auto1);//초기화
		auto1=setTimeout(autoPlay,2000);
		$('img',this).attr('src',$('img',this).attr('src').replace('off.gif','on.gif'));
		$('.stopBtn img').attr('src',$('.stopBtn img').attr('src').replace('on.gif','off.gif'));
		
		return false;
	})
	$('.stopBtn').click(function(){
		clearTimeout(auto1);
		$('img',this).attr('src',$('img',this).attr('src').replace('off.gif','on.gif'));
		$('.playBtn img').attr('src',$('.playBtn img').attr('src').replace('on.gif','off.gif'));
		
		return false;
	});
	
	/* 탭 */
	var onTab=$('#tabmenu dt a:first');
	$('#tabmenu dt a').on('mouseover',function(){
		$('#tabmenu dd:visible').hide();
		$('img',onTab).attr('src',$('img',onTab).attr('src').replace('over.jpg','out.jpg'));
		$(this).parent().next('dd').show();//a의 부모dt의 뒤dd가 보임
		$('img',this).attr('src',$('img',this).attr('src').replace('out.jpg','over.jpg'));
		onTab=$(this);
	});
	/* 신계절상품 슬라이드 */
	var mySlider=$('#bestgoods_zone ul').bxSlider({
		mode:'horizontal', //수평 방향 슬라이드
		speed:300, //속도
		pager:false,//페이지 수 표시 안 보이게
		moveSlides:1, //슬라이드시 한 개씩 슬라이드
		slideWidth:170, //슬라이드되는 배너 한 개의 너비
		minSlides:5, //최소 노출 슬라이드 수
		maxSlides:5, //최대 노출 슬라이드 수
		auto:true, //자동반복
		autoHover:true, //마우스 올릴 때 자동정지
		controls:false //이전, 다음 버튼 안 보이게
	});
	
	$('.prev_btn').on('click',function(){
		mySlider.goToPrevSlide(); //bxSlider의 옵션
		return false;
	});
	
	$('.next_btn').on('click',function(){
		mySlider.goToNextSlide(); //bxSlider의 옵션
		return false;
	});
	
	/* 팝업 연동 */
	//pop은 배포된 플러그인에 있음
	if($.cookie('pop')!='no')$('#pop_wrap').show();
	$('#pop_wrap').css('cursor','move').draggable();
	$('#pop_wrap area:eq(0)').click(function(){
		$('#pop_wrap').fadeOut('fast');
		return false;
	});
	
	$('#pop_wrap area:eq(1)').click(function(){
		$.cookie('pop','no',{expires:1}); //1일
		$('#pop_wrap').fadeOut('fast');
		return false;
	});
	
	/* 이벤트 슬라이드 배너 */
	var visual=$('#brandVisual>ul>li');
	var button=$('#buttonList>li');
	var current=0;
	var clearIntervalId;
	
	button.on({click:function(){
			var tg=$(this);
			var i=tg.index();
			if(current==tg.index()){
				return false;
			}
			button.removeClass('on');
			tg.addClass('on');
			move(i); //매개변수 i를 받아 실행하는 사용자정의함수
			return false;
			
		}
	});
	function move(i){
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:0});
		current=i;
	}
	
	function timer(){
		clearIntervalId=setInterval(function(){
			var n=current+1;
			if(n==visual.size()){
				n=0;
			}
			button.eq(n).trigger('click');
		},1500);
	}
	
	timer();
	
	$('#event_wrap').hover(function(){
		clearInterval(clearIntervalId);
	},function(){
		timer();
	});
	
	/* 로그인 옆 말풍선 둥실둥실 */
	$('.DB_etc10_1').DB_springMove({
		key:'e24102',  //라이센스 번호. 비밀번호같은 것. 언제나 같게 쓰면 됨
		dir:'x', //방향
		mirror:1, //반대 방향으로도 이동할 것인지
		radius:4, //이동반경
		motionSpeed:0.05 //숫자가 클 수록 빨라짐
	});
	
	/* 레시피 슬라이드 */
	
	function moveSlider(index){
		var willMoveLeft=-(index*785);
		$('.slider_panel').animate({left:willMoveLeft},'slow');
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		$('.slider_text[data-index='+index+']').show().animate({left:0},'slow');
		$('.slider_text[data-index!='+index+']').hide('slow',function(){$(this).css('left',-100)});
	}
	
	$('.slider_text').css('left',-100).each(function(index){
		$(this).attr('data-index',index);
	});
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index=$(this).attr('data-index');
		moveSlider(index);
	});
	
	var randomNumber=Math.round(Math.random()*4);
	
	moveSlider(randomNumber);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});