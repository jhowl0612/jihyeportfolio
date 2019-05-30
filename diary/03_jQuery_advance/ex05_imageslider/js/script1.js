$(function(){
	function moveSlider(index){
		/* var willMoveLeft=-(index%3*600);
		var willMoveTop=Math.floor(index/3)*(-400); 이해할 수 있다면 이쪽이 간단*/
		var willMoveLeft;
		var willMoveTop;
		
		if(index==0){
			willMoveLeft=0;
			willMoveTop=0;
		}else if(index==1){
			willMoveLeft=-600;
			willMoveTop=0;
		}else if(index==2){
			willMoveLeft=-1200;
			willMoveTop=0;
		}else if(index==3){
			willMoveLeft=0;
			willMoveTop=-400;
		}else if(index==4){
			willMoveLeft=-600;
			willMoveTop=-400;
		}else{
			willMoveLeft=-1200;
			willMoveTop=-400;
		};//슬라이드 내용물 별 레프트, 탑 설정

		
		$('.slider_panel').animate({left:willMoveLeft},'slow');
		$('.slider_panel').animate({top:willMoveTop},'slow'); //이미지 슬라이드
		
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active'); //버튼 활성화
		
		$('.slider_text[data-index='+index+']').show().animate({left:0},'slow');
		$('.slider_text[data-index!='+index+']').hide('slow',function(e){$(this).css('left','-300px')}); //텍스트 활성화. 자연스럽게 들어가는 효과를 위해, hide 안에 function으로 css를 넣음. 넣지 않으면 사라지고 나서 움직이므로, 효과가 보이지 않음.
	}
	
	$('.slider_text').css('left','-300px').each(function(index){
		$(this).attr('data-index',index);
	});//첫 실행시 텍스트 보이지 않게
	
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index=$(this).attr('data-index');
		moveSlider(index)
	});//버튼 클릭시 인덱스를 클릭된 버튼으로 변경, 변경된 index로 moveSlider(index) 즉시 다시 실행
	
	var randomNumber=Math.round(Math.random()*5);//random함수에서 0~1 사이의 난수 지정(소수점포함), round함수에서 반올림하여 정수로 바꿈
	moveSlider(randomNumber);//moveSlider(index) 요구되는 index에 randomNumber 값을 넣어 실행.
	
	var visual=$('.slider_panel > img');
	var button=$('.control_panel > div');
	var current=randomNumber;
	var setIntervalId;
	
	button.on({click:function(){
		var tg=$(this);//클릭된 버튼
		var i=tg.index();//클릭된 버튼의 순번
		
		button.removeClass('active');//다른버튼 비활성화
		tg.addClass('active');
		move(i)//선택된 순번에 맞게 이미지 슬라이드하기
	}
	});
	
	function move(i){//자동슬라이드를 위해 이미지 움직이는 함수를 다시 만듦
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
				n=0;//순번 갯의 끝(5)를 넘으면(6), 0(첫번째)으로 초기화
			}
			button.eq(n).trigger('click');//다음 순번의 버튼에 클릭이벤트 강제 발생
		},4000);
		
	}
	
	$('.animation_canvas').on({mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	});
	
	
	
	
	
	
	
});