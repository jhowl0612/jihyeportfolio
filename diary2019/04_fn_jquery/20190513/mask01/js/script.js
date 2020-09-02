$(function(){
	initScene()
	function initScene(){//마스크 애니메이션 사용자정의함수
		var $container=$('#scene-3'),
			$masks=$container.find('.mask'),//마스크
			$line=$masks.find('.line'),//경계선
			maskLength=$masks.length,//마스크의 개수
			maskData=[];//각 마스크 영역의 데이터를 저장하는 배열
		
			//마스크마다 자른 영역의 왼쪽 좌표를 저장
			$masks.each(function(i){
				maskData[i]={left:0};
			});
			
			//마스크에 마우스엔터,리브가 일어날 때 작업
			$container.on({mouseenter:function(){
				resizeMask($(this).index());
			},mouseleave:function(){
				resizeMask(-1);
			}
			},'.mask');
			
			//각 마스크에 초기 자르기 영역과 경계선 위치 지장
			resizeMask(-1);
			
			function resizeMask(active){
				var w=$container.width();
				var h=$container.height();
				
				
				$masks.each(function(i){
					var $this=$(this);
					var l;
					
					//마우스이벤트 시 마스크 영역의 왼쪽 좌표를 산출
					if(active===-1){
						l=w/maskLength*i;
					}else if(active<i){//마우스오버된 마스크보다 오른쪽 마스크는 자르기 영역의 왼쪽을 오른쪽 방향으로 옮기기 위해
						l=w*(1-0.1*(maskLength-i));
					}else{//그외 왼쪽에서 왼쪽으로
						l=w*0.1*i
					}
					
					$(maskData[i]).stop().animate({left:l},{duration:1000,easing:'easeOutQuart',progress:function(){
						var now=this.left;
						$this.css({clip:'rect(0px '+w+'px '+h+'px '+now+'px)'});
						
						$this.find($line).css({left:now});
					}
					
					});
				})
			}
	}
	
});