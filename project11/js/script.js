$(function(){
	//json 불러오기
	$.get('data/data.json', function(data){
		//console.log(data);
		var priceList=data.priceList; //json 파일 2라인의 "priceList"
		var table=$('#charge_data');
		
		for(var i in priceList){
			var price=priceList[i] //각 중괄호 데이터모음
			var cnt=0;
			for(var prop in price){
				var text=price[prop]; //각 데이터 한줄씩
				var tr=table.find('tr').eq(parseInt(i)+2); //헤드를 건너뛰기 위해 +2
				var td=tr.find('>td').eq(cnt+2); //방이름, 형태 칸 건너뛰기 위해 +2 
				td.text(text);
				cnt++;
			}
		}
	}, 'json');
	//해상도 반응. IE7에도 됨
	response();
	$(window).resize(function(){
		setTimeout(response,500);
	});
	function response(){
		var screenW=$(window).width();
		if(screenW<=1280){
			$('body').removeClass().addClass('W1280');
		}
		else if(screenW>1280){
			$('body').removeClass();	
		}
	}
	
	//메뉴 호버 시 2뎁스 페이드인
	$('#gnb>li').hover(function(){
		$(this).find('.dep2').stop().fadeIn('fast');
	},function(){
		$(this).find('.dep2').stop().fadeOut('fast');
	});
	//메뉴 옆 버튼 클릭시 메뉴 사라짐
	var now=1;
	$('#header .menuBtn').click(function(){
		var off=$(this).find('.btn_off');
		var on=$(this).find('.btn_on');
		if(now<=1){
			off.stop().fadeIn('fast');
			on.stop().fadeOut('fast');
			$('#gnb').fadeOut('fast');
			now++;
		}else{
			on.stop().fadeIn('fast');
			off.stop().fadeOut('fast');
			$('#gnb').fadeIn('fast');
			now--;
		}
		return false;
	});
	//최상단 이동 버튼
	$('#footer .top_go').click(function(){
		$('html,body').stop().animate({scrollTop:0},500);
		return false;
	});
});