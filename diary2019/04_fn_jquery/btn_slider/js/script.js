$(function(){
	var visual=$('#brandVisual>ul>li');//슬라이드되는 이미지
	var button=$('#buttonList>li');
	var leftBtn=$('.btnImg .prev');
	var rightBtn=$('.btnImg .next');
	var current=0;//현재 보이는 이미지
	var setIntervalId;//클리어 인터벌 쓰기 위한 변수
	
	timer()
	function timer(){
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev,0,'-100%');
			pn.removeClass('on');
			
			current++;
			if(current==visual.size()){
				current=0;
			}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next,'100%',0);
			pnn.addClass('on');
		},3000) 
	}
	function move(tg, start, end){//두 가지 요소를 한꺼번에 움직여야 할 때 필요한 매개변수 함수
		tg.css('left',start).stop().animate({left:end},500);
	}
	
	/* 버튼 클릭 시*/
	button.on({click:function(){
		var tg=$(this);
		var i=tg.index();
		button.removeClass('on');
		tg.addClass('on');
		move1(i);
	}
	});
	function move1(i){//버튼 클릭시 움직이는 함수
		if(current==i) return;
		
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i);
		
		currentEl.css({left:0}).stop().animate({left:'-100%'},500);
		nextEl.css({left:'100%'}).stop().animate({left:0},500);
		
		current=i;
	}
	
	$('#wrap').on({mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	});
	
	/* 화살표 */
	
	rightBtn.click(function(){
		var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev,0,'-100%');
			pn.removeClass('on');
			
			current++;
			if(current==visual.size()){
				current=0;
			}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next,'100%',0);
			pnn.addClass('on');
			return false;
	});
	
	leftBtn.click(function(){
		var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev,0,'100%');
			pn.removeClass('on');
			
			current--;
			if(current==-visual.size()){
				current=0;
			}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next,'-100%',0);
			pnn.addClass('on');
	});
});