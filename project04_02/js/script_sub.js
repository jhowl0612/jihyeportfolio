$(function(){
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var gnb=$('#gnb').offset();
		
		if(sct>140){
			$('#wrap').addClass('fixed');
		}else{
			$('#wrap').removeClass('fixed');
		}
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
   
   	$('.gnb_search a').click(function(){
		$('#search_mold').addClass('active');
		return false;
	});
	$('.search_close a').click(function(){
		$('#search_mold').removeClass('active');
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
	$('.location_guide ul ul').hide();
	$('.location_guide button').click(function(){
		var th=$(this).next();
		$('.location_guide ul ul').slideUp('fast');
		$('.location_guide button').css({background:'url(images/history_arrow_down.png) no-repeat 92% center'});
		if(th.is(':visible')){
			th.slideUp('fast');
			$(this).css({background:'url(images/history_arrow_down.png) no-repeat 92% center'});
		}else{
			th.slideDown('fast');
			$(this).css({background:'url(images/history_arrow_up.png) no-repeat 92% center'});
		};
	});
   
   
   
   
   
   
});