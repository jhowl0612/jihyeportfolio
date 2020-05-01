$(function(){
   $('.guideText').each(function(){
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
});