$(function(){
	$('#bar').draggable({
		axis:'x', //x축 or 축
		containment:'parent' //부모 기준
	});
	$('#bar').bind('drag',function(){
		getPos();
	});
	
	var min=0;
	var max=800;
	
	function getPos(){
		var barLeft=$('#bar').css('left'); //left 값을 담기
		barLeft=parseInt(barLeft); //숫자데이터화(px 지우기)
		//스크롤바와 이미지 박스가 움직일 거리의 비례를 계산하는 식
		var pos=(barLeft*(max-min))/570+min; //드래그한 현재위치(이미지가 움직일 최대거리)/스크롤바가 움직일 최대거리+min
		$('#content').css('left',-pos);
	}
});