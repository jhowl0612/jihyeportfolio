$(function(){
	var popup_img=$('.popup_img li');
	var popup_control=$('.control_btns');
	
	popup_img.not(':first').hide();
	var pop_onButton=$('.popup_btn div a:first');
	
	$('.popup_btn div a').click(function(e){
		e.preventDefault();
		tg=$(this);
		
		$('.popup_img li:visible').fadeOut(200);
		var num=$('.popup_btn div a').index(this);//선택한 버튼의 순번 담기
		$(popup_img).eq(num).fadeIn(200);
		
		pop_onButton.removeClass('on');
		tg.addClass('on');
		pop_onButton=$(this);
		btnNum=$('.popup_btn div a').index(this);
	});
	
	var btnNum=0;

	function autoPlay(){
		btnNum++;
		if(btnNum>=10){
			btnNum=0;
		}
		$('.popup_btn div a').eq(btnNum).trigger('click');
		auto1=setTimeout(autoPlay,2000);
	}
	auto1=setTimeout(autoPlay,2000);
	
	var cond_num=1;
	popup_control.click(function(){
		if(cond_num<=1){
			$('img',this).attr('src',$('img',this).attr('src').replace('on.gif','off.gif'));
			clearTimeout(auto1);
			cond_num++;
		}else{
			$('img',this).attr('src',$('img',this).attr('src').replace('off.gif','on.gif'));
			auto1=setTimeout(autoPlay,2000);
			cond_num--;
		}
	});
	
	
	
	
	
	
	
	
	
	
});