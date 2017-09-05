var $BodyList = $('.content_body_div');
var $bodyWidth = $(document).width();
$(function() {
	var $contBody = $('#content_body');
	var $contList = $('#ul_navSwi li');
	var $contListLength = $bodyWidth * ($contList.length - 1);
	var $leftWidth = 0;
	var numIndex = 0;
	var index;
	var index2 = 0;
	$BodyList.width($bodyWidth);
	$contList.click(function() {
		index = $(this).index();
		$leftWidth = $bodyWidth * index;
		if(numIndex <= index) {
			$contBody.css({
				"transition": "-webkit-transform 450ms ease-out",
				"webkitTransform": "translateX(-" + $leftWidth + "px) scale(1) translateZ(0px)"
			})
		} else {
			$contBody.css({
				"transition": "-webkit-transform 450ms ease-out",
				"webkitTransform": "translateX(-" + $leftWidth + "px) scale(1) translateZ(0px)"
			})
		}
		$(this).addClass('col_click').siblings().removeClass('col_click');
		return numIndex = $(this).index();
	})
	// 左右滑动
	$contBody.on("swipeleft", function() {
		if($leftWidth < $contListLength) {
			$leftWidth = $bodyWidth + $leftWidth;
			$contBody.css({
				"transition": "-webkit-transform 400ms ease-out",
				"webkitTransform": "translateX(-" + $leftWidth + "px) scale(1) translateZ(0px)"
			})
			if(index>=0) {
				index += 1;
				$contList.eq(index).addClass('col_click').siblings().removeClass('col_click');
			} else {
				if(index2 < $contList.length){
				  index2 += 1;	
				  $contList.eq(index2).addClass('col_click').siblings().removeClass('col_click');
				}
			}
		}
	});
	$contBody.on("swiperight", function() {
		if($leftWidth > 0) {
			$leftWidth = $leftWidth - $bodyWidth;
			$contBody.css({
				"transition": "-webkit-transform 400ms ease-out",
				"webkitTransform": "translateX(-" + $leftWidth + "px) scale(1) translateZ(0px)"
			})
			if(index>=0) {
				index -= 1;
				$contList.eq(index).addClass('col_click').siblings().removeClass('col_click');
			} else {
				if(index2 > 0){
				  index2 -= 1;
				  $contList.eq(index2).addClass('col_click').siblings().removeClass('col_click');
				}
			}
		}
	});
})
$(window).resize(function() {
	$bodyWidth = $(document).width();
	$BodyList.width($bodyWidth);
});