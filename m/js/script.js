$(function(){
	var menu_num=1;
	$('#header .menubtn').click(function(){
		var nav=$('#header .menu');
		var navBtn=$(this);
		var overlay=$('#header .overlay');
		if(menu_num<=1){
			navBtn.addClass('active');
			nav.css('left','-65%').stop().animate({left:0});
			overlay.fadeIn();
			menu_num++;
		}else{
			navBtn.removeClass('active');
			nav.css('left','0').stop().animate({left:'-65%'});
			overlay.fadeOut();
			menu_num--;
		}
		return false;
	});
	$('#header .overlay').click(function(){
		$('#header .menubtn').removeClass('active');
		$('#header .menu').css('left','0').stop().animate({left:'-65%'});
		$(this).fadeOut();
		menu_num=1;
	});
	$('#intro a.contact').click(function(){
		$('#header .menubtn').addClass('active');
		$('#header .menu').css('left','-65%').stop().animate({left:0});
		$('#header .overlay').fadeIn();
		menu_num=2;
		return false;
	});
	
	$('#intro img').DB_springMove({
		key:'c65806',
		dir:'y',
		mirror:0.5,
		radius:6,
		motionSpeed:0.14
	});
	
	var swiper = new Swiper('.swiper-container', {
      autoHeight: true,
	  pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});