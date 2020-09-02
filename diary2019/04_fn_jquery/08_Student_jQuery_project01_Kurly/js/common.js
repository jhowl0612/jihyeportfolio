$(function(){
	/* top 이벤트배너 */
	$('#top_event').find('.close_btn').click(function(){
		$('#top_event').slideUp(1000);
	});
	
	/* 로그인버튼 */
	$('.login_wrap>a').on('click',function(){
		$('#login_f').animate({top:'20px'},500);
		return false;
	});
	
	$('.login_wrap .login_close_btn, .login_wrap input[alt="login"]').on('click',function(){
		$('#login_f').animate({top:'-500px'},500);
		return false;
	});
	/* 아이디,비밀번호 가이드텍스트 사라지기, 나타나기 */
	$('#user_id, #user_pw').on('focus',function(){
		$(this).prev().css('left','-99999px');
	});
	$('#user_id, #user_pw').on('blur',function(){
		if($(this).val()==''){
			$(this).prev().css('left','2px');
		}
	});
	
	
	/* zoom 버튼 */
	var base=100;
	var mybody=$('body');
	$('#zoom a').on('click',function(){
		var zNum=$('#zoom a').index(this);
		if(zNum==0){
			base+=10;
		}else if(zNum==1){
			base=100;
		}else{
			base-=10;
		}
		
		mybody.css('overflow-y','auto').css('transform-origin','50% 0%').css('transform','scale('+base/100+')').css('zoom',base+'%');
		return false;
	});
	
	/* 인쇄 버튼 */
	
	$('.print_btn').click(function(){
		window.print();
		return false;
	});
	
	/* 검색 창 안내 가이드 */
	$('#keyword').on('focus',function(){
		$(this).css('background-position','0 -500px');
	}).on('blur',function(){
		if($(this).val()==''){
			$(this).css('background-position','0 0');
		}
	});
	
	/* 전체메뉴 */
	$('#total_btn a').click(function(){
		$('#total_menu').slideDown(1000);
		return false;
	});
	$('#total_close').click(function(){
		$('#total_menu').slideUp(1000);
		return false;
	});;
	
	/* 날짜 표기 */
	var t=new Date();
	var y=t.getFullYear();
	var m=t.getMonth();
	var d=t.getDate();
	
	$('#date_wrap .year').text(y);
	$('#date_wrap .month').text(m+1);
	$('#date_wrap .date').text(d);
	
	/* 관련사이트 이동 */ //옵션에 링크저장
	$('form[name="rel_f"]').on('submit',function(){
		var url=$('select',this).val();
		window.open(url);
		return false;
	});
	
	/* 퀵메뉴 */
	var defaultTop=parseInt($('#quick_menu').css('top'));
	$(window).scroll(function(){
		var scv=$(window).scrollTop();
		if(scv<465){
			scv=465
		}
		$('#quick_menu').stop().animate({top:scv+defaultTop+'px'},1000);
	});
	$('#quick_menu').css({top:'645px'},1000);
	
	
	
	
	
	
	
	
	
	
	
	
});