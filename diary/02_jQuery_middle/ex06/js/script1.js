$(function(){
	var el=$('#nav ul li');
	var urls=[
		"http://www.naver.com",
		"http://www.daum.net",
		"http://www.nate.com",
		"http://www.google.com"
	];
	el.on({mouseover:function(){
		var tg=$(this);
		tg.addClass('on');
	},mouseout:function(){
		var tg=$(this);
		tg.removeClass('on');
	},click:function(event){
		event.preventDefault();
		var tg=$(this);
		var i=tg.index();
		var linkURL=urls[i];
		location.href=linkURL;
	}
	});
});