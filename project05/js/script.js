$(function() {

	$('#family a').click(function(){
		if($('#family ul').css('height')==216+"px"){
			$('#family ul').css({height:0,paddingTop:0,borderWidth:0},300);
			return false;
		}
		$('#family ul').css({height:216,paddingTop:10,borderWidth:1},300);
		return false;
	}	);
	$('#relation a').click(function(){
		if($('#relation ul').css('height')==152+"px"){
			$('#relation ul').css({height:0,paddingTop:0,borderWidth:0},300);
			return false;
		}
		$('#relation ul').css({height:152,paddingTop:10,borderWidth:1},300);
		return false;
	}	);
	
	
	bb=true;
	
	$('.menuIconL').click(function(){
		if($(window).width()<780){
			$('.gnb_box.under780.left').stop().animate({'left':'-100%'},300,function(){
				bb=true;
			});
			$('.gnb_box.under780.right').stop().animate({'left':'100%'},300,function(){
				bb=true;
			});
			if(bb){
				$(this).addClass('open');
				$(this).stop().animate({'left':'-75px'},400)
				$(this).find('.under780').attr('src','images/icon_close.png')
				$('.gnb_box.under780.left').stop().animate({'left':'0'},400,function(){
					bb=false;
				});
			}else{
				$(this).removeClass('open');
				$(this).stop().animate({'left':'-100%'},400)
				$(this).find('.under780').attr('src','images/icon_menu_2_off.png')
				$(this).next('.gnb_box.under780.left').stop().animate({'left':'-100%'},400,function(){
					bb=true;
				});
			};
		}
	});
	
	$('.menuIconR').click(function(){
		if($(window).width()<780){	
			if(bb){
				$(this).addClass('open');
				$(this).stop().animate({'left':'75px'},400);
				$(this).find('.under780').attr('src','images/icon_close.png')
				$('.gnb_box.under780.right').stop().animate({'left':'0'},400,function(){
					bb=false;
				});
			}else{
				$(this).removeClass('open');
				$(this).stop().animate({'left':'100%'},400)
				$(this).find('.under780').attr('src','images/icon_menu_2_off.png')
				$(this).next('.gnb_box.under780.right').stop().animate({'left':'100%'},400,function(){
					bb=true;
				});
			};
		}
	});
	
	$('.banner_info').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul.tab_list a');
		var panelDivs=topDiv.find('div.info-img')
		
		var lastAnchor;
		var lastPanel;
		
		lastAnchor=anchors.filter('.active');
		lastPanel=$(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(e){
			e.preventDefault();
			var currentAnchor=$(this);
			var currentPanel=$(currentAnchor.attr('href'));
				lastAnchor.removeClass('active');
				currentAnchor.addClass('active');
				lastPanel.hide();
				currentPanel.show();
				
				lastAnchor=currentAnchor;
				lastPanel=currentPanel;

		});
	});
	
	var interval=3000;
	$('#Mslide').each(function(){
		var timer;
		var container=$(this);
		function swichImg(){
			var anchor=container.find('li');
			var first=anchor.eq(0);
			var second=anchor.eq(1);
			
			first.fadeOut('slow').appendTo(container);
			second.fadeIn('slow');
		};
		
		function startTimer(){
			timer=setInterval(swichImg,interval)
		}
		
		function stopTimer(){
			clearInterval(timer)
		}
		startTimer();
		
		$(this).click(function(){
			var anchor=container.find('li');
			var first=anchor.eq(0);
			var second=anchor.eq(1);
			
			first.fadeOut('slow').appendTo(container);
			second.fadeIn('slow');
		});
		
		$('.main_visual .ctrl .next').click(function(){
			var anchor=container.find('li');
			var first=anchor.eq(0);
			var second=anchor.eq(1);
			
			first.fadeOut('slow').appendTo(container);
			second.fadeIn('slow');
		});
		
		$('.main_visual .ctrl .prev').click(function(){
			var anchor=container.find('li');
			var last=anchor.eq(3);
			var first=anchor.eq(0);
			var second=anchor.eq(1);
			
			first.fadeOut('slow');
			last.fadeIn('slow')
			container.prepend(last);
		});
		
		$('.main_visual .ctrl .center').click(function(){	
			if(bb){
				stopTimer();
				$(this).removeClass('stop');
				$(this).addClass('play');
				bb=false;
			}else{
				startTimer();
				$(this).removeClass('play');
				$(this).addClass('stop');
				bb=true;
			};
		});
	});
	
	var currentL=0;
	timerL()
	function timerL(){
		setIntervalIdL=setInterval(function(){
			var banner=$('.noticeL li');
			
			var prev=banner.eq(currentL);
			move(prev, 0, '-100%')
			currentL++;
			
			if(currentL==banner.size()){currentL=0;}
			
			var next=banner.eq(currentL);
			move(next, '100%', 0)
		},3000);
	}
	SL_num=1;
	$('.slideL .ctrl .center').click(function(){	
		if(SL_num<=1){
			clearInterval(setIntervalIdL);
			$(this).removeClass('stop');
			$(this).addClass('play');
			SL_num++;
		}else{
			timerL()
			$(this).removeClass('play');
			$(this).addClass('stop');
			SL_num--;
		};
	});
	
	
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},{duration:250,ease:'easeOutCubic'})
	}
	
	var currentR=0;
	timerR()
	function timerR(){
		setIntervalIdR=setInterval(function(){
			var banner=$('.noticeR li');
			
			var prev=banner.eq(currentR);
			move(prev, 0, '-100%')
			currentR++;
			
			if(currentR==banner.size()){currentR=0;}
			
			var next=banner.eq(currentR);
			move(next, '100%', 0)
		},3000);
	}
	SR_num=1;
	$('.slideR .ctrl .center').click(function(){	
		if(SR_num<=1){
			clearInterval(setIntervalIdR);
			$(this).removeClass('stop');
			$(this).addClass('play');
			SR_num++;
		}else{
			timerR()
			$(this).removeClass('play');
			$(this).addClass('stop');
			SR_num--;
		};
	});
	
	$('.curation').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('>ul>li>a');
		var panelDivs=topDiv.find('div.photolist')
		
		var lastAnchor;
		var lastPanel;
		
		lastAnchor=anchors.filter('.active');
		lastPanel=$(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(e){
			e.preventDefault();
			var currentAnchor=$(this);
			var currentPanel=$(currentAnchor.attr('href'));
				lastAnchor.removeClass('active');
				currentAnchor.addClass('active');
				lastPanel.hide();
				currentPanel.show();
				
				lastAnchor=currentAnchor;
				lastPanel=currentPanel;
		});
	});
	
	$('.sns_list li').each(function(){
		var timerS;
		var container=$(this);
		function swichImg(){
			var anchor=container.find('a');
			var first=anchor.eq(0);
			var second=anchor.eq(1);
			
			first.fadeOut().appendTo(container);
			second.fadeIn();
			
		};
		
		function startTimer(){
			timerS=setInterval(swichImg,5000)
		}
		
		function stopTimer(){
			clearInterval(timerS)
		}
		startTimer();
		$('.sns_list').hover(function(){
			stopTimer()
		},function(){
			startTimer()
		})
		
	});
});






