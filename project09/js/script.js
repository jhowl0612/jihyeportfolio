(function($) {
	$(function(){
		$('.recommend_list li').click(function(){
			var tg=$(this);
			var list=tg.parents('.recommend_list');
			var sibling=list.find('li');
			var i=tg.index();
			var con=list.prev('.content').find('li');
			
			sibling.removeClass('active');
			tg.addClass('active');
			con.removeClass('active');
			con.eq(i).addClass('active');
			
			return false;
		});
	});
})(jQuery);