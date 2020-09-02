$(function(){
	var slide=$('ul.slide');
	var slideWidth=slide.width();
	var slideList=$('ul.slide li');
	var slideListWidth=slideList.width();
	var current=0;
	
	
	function next(){
		slide.animate({left:-slideListWidth},100,function(){
			$('ul.slide>li:first').insertAfter('ul.slide>li:last');
			slide.css('left',10);
		})
	}
	function prev(){
		$('ul.slide>li:last').insertBefore('ul.slide>li:first')
		slide.css('left',-slideListWidth).animate({left:10},100);
	}
	
	$('.prev').click(function(){
		prev();
	});
	$('.next').click(function(){
		next();
	});
	
	var fd=$('.fade>.bigImg');
	/* slideList.mouseover(function(){
		var th=$(this);
		var i=th.index();
		var fdi=$('.fade>.bigImg').eq(i);
		
		fd.removeClass('on');
		fdi.addClass('on');
	}) 인덱스순서가 바뀌지 않는 슬라이드에서 사용가능*/
	$('.sll1').mouseover(function(){
		fd.removeClass('on');
		$('.fdd1').addClass('on');
	});
	$('.sll2').mouseover(function(){
		fd.removeClass('on');
		$('.fdd2').addClass('on');
	});
	$('.sll3').mouseover(function(){
		fd.removeClass('on');
		$('.fdd3').addClass('on');
	});
	$('.sll4').mouseover(function(){
		fd.removeClass('on');
		$('.fdd4').addClass('on');
	});
	$('.sll5').mouseover(function(){
		fd.removeClass('on');
		$('.fdd5').addClass('on');
	});
	$('.sll6').mouseover(function(){
		fd.removeClass('on');
		$('.fdd6').addClass('on');
	});
	$('.sll7').mouseover(function(){
		fd.removeClass('on');
		$('.fdd7').addClass('on');
	});
	$('.sll8').mouseover(function(){
		fd.removeClass('on');
		$('.fdd8').addClass('on');
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});