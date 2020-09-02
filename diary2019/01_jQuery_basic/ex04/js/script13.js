jQuery(document).ready(function(){
    $('#box1').animate({left:'500'},2000).animate({top:'600'},1000);
    $('#box2').delay(3000).animate({bottom:'400'},2000).animate({right:'300'},3000);
});