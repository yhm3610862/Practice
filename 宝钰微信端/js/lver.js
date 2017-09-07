$(function(){
	//图片效果
	var bigpic = $(".big_pic").width();
	$(".asset_detail").css('height',bigpic);
	$(".big_pic").css('height',bigpic);
	$('.small_pic').css('height',bigpic);
	var smallpic = $('.small_pic li').width(); 
	for (var i =0;i<$('.small_pic li').length;i++) {
		$('.small_pic li').eq(i).css('height',smallpic);
		$('.small_pic li').eq(i).find('a').css({'heigth':smallpic,'width':smallpic});
		$('.small_pic li').eq(i).find('img').css({'height':smallpic,'width':smallpic});
//		alert($('.small_pic li a img').css('heigth'));
	}
	
	
	$(window).resize(function(){
		var bigpic = $(".big_pic").width();
		$(".asset_detail").css('height',bigpic);
		$(".big_pic").css('height',bigpic);
		var smallpic = $('.small_pic li').width(); 
		for (var i =0;i<$('.small_pic li').length;i++) {
			$('.small_pic li').eq(i).css('height',smallpic);
			$('.small_pic li').eq(i).find('a').css({'heigth':smallpic,'width':smallpic});
			$('.small_pic li').eq(i).find('img').css({'height':smallpic,'width':smallpic});
//		alert($('.small_pic li a img').css('heigth'));
		}
	});
	
	
	$(".small_pic li").on("click touchstart",function(){
		var src=$(this).find("img").attr("src");
		$("#suibian").attr('src',src);
		if($(this).find('a').hasClass('on')){
			$(this).siblings().find('a').removeClass('on');
		}
		else{
			$(this).find('a').addClass('on');
			$(this).siblings().find('a').removeClass('on');
		}
	});
	
	
	//筛选项
	var gener = $(".genre_list").length;
//		alert(gener);
	for (var i = 0;i < gener;i++) {
		if ($(".genre_list").eq(i).find('li').length > 3) {
			for (var j = 3;j < $(".genre_list").eq(i).find('li').length;j++) {
				$(".genre_list").eq(i).find('li').eq(j).hide();
			}
		} else{
			$(".genre_list").eq(i).siblings('.cont_item_head').find('button').hide().siblings('.astrict').css('margin-right','12.5%');	
		}
	}	
})
function genre_select(dom){
	$(dom).addClass('pitch_on').removeClass('pitch_none').siblings().addClass('pitch_none').removeClass('pitch_on');
	$(dom).parent().siblings('div').find('.astrict').html($(dom).html()).css('color','#4976E8');
	if ($(dom).find('span').html() == '不限') {
		$(dom).parent().siblings('div').find('.astrict').css('color','#B2ACA8');
	}
	var html = $(dom).find('span').width();
	var body = $('body').width();
	if(body >320){
		if (html >= 70) {
		$(dom).find('span').css('text-indent','18px');
		}
		if (html >= 57 &&html <=70) {
			$(dom).find('span').css('text-indent','8px');
		}
	}else{
		if(html >= 48){
			$(dom).find('span').addClass('spill');
		}
	}
	$(dom).siblings().find('span').css({'text-indent':'0px'}).removeClass('spill');
}
function open_close(dom,mode){
	if ($(dom).find('button').hasClass('close')) {
		if (mode == 0) {
			$(dom).next().fadeIn();
		} else{
			for (var j = 3;j < $(dom).next().find('li').length;j++) {
				$(dom).next().find('li').eq(j).show();
			}
		}
		$(dom).find('button').removeClass('close').addClass('open');
//		$(".search").show();
	} else{
			if (mode == 0) {
				$(dom).next().fadeOut();
			} else{
				for (var j = 3;j < $(dom).next().find('li').length;j++) {
					$(dom).next().find('li').eq(j).hide();
				}
			}
			$(dom).find('button').removeClass('open').addClass('close');
//			$(".search").hide();
		}
		
}
function soushuo(){
	$("#shaixuanhou").show();
	$("#shaixuanxiang").hide();
}
function change(){
//	$("#shaixuanhou").hide();
	$("#shaixuanxiang").show();
	$("#shaixuanxiang").css('position','absolute');
	$("#shaixuanxiang").css('z-index','3');
}