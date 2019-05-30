//<![CDATA[
$(document).ready(function() {
	
	$("#touchSlider").touchSlider({
		/*
		autoplay : {
			enable : true,
			pauseHover : true,
			addHoverTarget : "", // 다른 오버영역 추가 ex) ".someBtn, .someContainer"
			interval : 3500
		},
		*/
		btn_prev : $("#touchSlider").next().find(".btn_prev"),
		btn_next : $("#touchSlider").next().find(".btn_next"),
		counter : function (e) {
			$("#count").html("current : " + e.current + ", total : " + e.total);
		}
	});
	
	$("#touchSlider2").touchSlider({
		roll : false,
		page : 2,
		speed : 1000,
		btn_prev : $("#touchSlider2").next().find(".btn_prev"),
		btn_next : $("#touchSlider2").next().find(".btn_next")
	});
	
	$("#touchSlider3").touchSlider({
		roll : false,
		view : 3,
		btn_prev : $("#touchSlider3").next().find(".btn_prev"),
		btn_next : $("#touchSlider3").next().find(".btn_next")
	});
	
	$("#touchSlider4").touchSlider({
		view : 3,
		btn_prev : $("#touchSlider4").next().find(".btn_prev"),
		btn_next : $("#touchSlider4").next().find(".btn_next")
	});
	
	$("#touchSlider5").touchSlider({
		view : 5,
		btn_prev : $("#touchSlider5").next().find(".btn_prev"),
		btn_next : $("#touchSlider5").next().find(".btn_next")
	});
	
	$("#touchSlider6").touchSlider({
		initComplete : function (e) {
			var _this = this;
			var paging = $(this).next(".paging");
			
			paging.html("");
			$(this).find(" > ul > li").each(function (i, el) {
				var num = (i+1) / e._view;
				if((i+1) % e._view == 0) {
					paging.append('<button type="button" class="btn_page">page' + num + '</button>');
				}
			});
			paging.find(".btn_page").bind("click", function (e) {
				_this.go_page($(this).index());
			});
		},
		counter : function (e) {
			$(this).next(".paging").find(".btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$("#touchSlider7").touchSlider({
		resize : true,
		btn_prev : $("#touchSlider7").next().find(".btn_prev"),
		btn_next : $("#touchSlider7").next().find(".btn_next")
	});
	
	$("#touchSlider8").touchSlider({
		roll : false,
		btn_prev : $(".touchSlider8_wrap").next().find(".btn_prev"),
		btn_next : $(".touchSlider8_wrap").next().find(".btn_next"),
		counter : function (e) {
			var _this = $(this);
			var list_wrap = _this.children();
			var gap = _this.parent().width() - _this.get(0)._item_w;
			if(e.current == e.total && e.total > 1) {
				list_wrap.css({
					left: gap+"px"
				});
			} else {
				list_wrap.css({
					left: "0"
				});
			}
		}
	});
	
	$("#touchSlider9").touchSlider({
		sidePage : true,
		btn_prev : $(".touchSlider9_wrap").next().find(".btn_prev"),
		btn_next : $(".touchSlider9_wrap").next().find(".btn_next")
	});
	
	$("#touchSlider10").touchSlider({
		sidePage : true,
		btn_prev : $(".touchSlider10_wrap").next().find(".btn_prev"),
		btn_next : $(".touchSlider10_wrap").next().find(".btn_next")
	});
	
});
//]]>