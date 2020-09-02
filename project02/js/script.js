$(function() {
	
	$("ul.tab_list li").click(function(){
		var activeTab=$(this).attr("data-tab");
		
		$("ul.tab_list li").removeClass("active");
		$(".info-img").removeClass("active");
		
		$(this).addClass("active")
		$("#"+activeTab).addClass("active");
	})
	
	$(".curation li").click(function(){
		var activeTab=$(this).attr("data-tab");
		
		$(".curation li").removeClass("active");
		$(".photolist").removeClass("active");
		
		$(this).addClass("active")
		$("#"+activeTab).addClass("active");
	})
	var sliderM = document.getElementById("Mslide");
	var y = 4500;
	var slideMArray=sliderM.getElementsByTagName("li");
	var slideMMax=slideMArray.length - 1;
	var curSlideMNo=0;
	var changeSlideM=function(){
		for (i=0;i<=slideMMax;i++){
			if (i==curSlideMNo) slideMArray[i].style.left=0;
			else slideMArray[i].style.left=y+"px";
		}
	}	
	changeSlideM();
	sliderM.addEventListener('click',function(){
		curSlideMNo=curSlideMNo+1
		if (curSlideMNo>slideMMax) curSlideMNo=0;
		changeSlideM();
	}, false);
	$(".main_visual div.ctrl .next").click(function(){
		curSlideMNo=curSlideMNo+1
		if (curSlideMNo>slideMMax) curSlideMNo=0;
		changeSlideM();
	})
	$(".main_visual div.ctrl .prev").click(function(){
		curSlideMNo=curSlideMNo-1
		if (curSlideMNo<0) curSlideMNo=slideMMax;
		changeSlideM();
	})
	
	var sliderL = document.getElementById("noticeL");
	var x = 350;
	var slideLArray=sliderL.getElementsByTagName("li");
	var slideLMax=slideLArray.length - 1;
	var curSlideLNo=0;
	var changeSlideL=function(){
		for (i=0;i<=slideLMax;i++){
			if (i==curSlideLNo) slideLArray[i].style.left=0;
			else slideLArray[i].style.left=x+"px";
		}
	}	
	changeSlideL();
	sliderL.addEventListener('click',function(){
		curSlideLNo=curSlideLNo+1
		if (curSlideLNo>slideLMax) curSlideLNo=0;
		changeSlideL();
	}, false);
	$(".slideL div.ctrl .next").click(function(){
		curSlideLNo=curSlideLNo+1
		if (curSlideLNo>slideLMax) curSlideLNo=0;
		changeSlideL();
	})
	$(".slideL div.ctrl .prev").click(function(){
		curSlideLNo=curSlideLNo-1
		if (curSlideLNo<0) curSlideLNo=slideLMax;
		changeSlideL();
	})
	
	var sliderR = document.getElementById("noticeR");
	var x = 350;
	var slideRArray=sliderR.getElementsByTagName("li");
	var slideRMax=slideRArray.length - 1;
	var curSlideRNo=0;
	var changeSlideR=function(){
		for (i=0;i<=slideRMax;i++){
			if (i==curSlideRNo) slideRArray[i].style.left=0;
			else slideRArray[i].style.left=x+"px";
		}
	}	
	changeSlideR();
	sliderR.addEventListener('click',function(){
		curSlideRNo=curSlideRNo+1
		if (curSlideRNo>slideRMax) curSlideRNo=0;
		changeSlideR();
	}, false);
	$(".slideR div.ctrl .next").click(function(){
		curSlideRNo=curSlideRNo+1
		if (curSlideRNo>slideRMax) curSlideRNo=0;
		changeSlideR();
	})
	$(".slideR div.ctrl .prev").click(function(){
		curSlideRNo=curSlideRNo-1
		if (curSlideRNo<0) curSlideRNo=slideRMax;
		changeSlideR();
	})

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
	
});






