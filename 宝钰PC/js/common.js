$(function(){
	$(".two_nav>li:last").attr('style','margin-bottom:0px');	
	//导航
	$(".one_nav li").hover(function(){
		$(this).find(".two_nav").stop().slideDown();	
	},function(){
		$(this).find(".two_nav").stop().slideUp();	
	});
	
	
	//信息
	$(".infor_hd li").click(function(){
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".infor_bd .infor_table").eq(index).show().siblings().attr('style','display:none;');
	});
	
	//index_list
	$(".index_list li img").hover(function(){
		$(this).parents("li").addClass("active").removeClass("hidden").siblings().addClass("hidden").removeClass("active");
	},function(){
		$(this).parents("li").addClass("hidden").removeClass("active");
	});
	
	$(".picList li:first").attr('style','margin-left:0px;');
	<!--新闻-->
	$(".news_li li").hover(function(){
		$(this).attr('style','border-bottom:1px solid #c9c9c9;');
		$(this).find(".new_pic").stop().animate({
			width:"300px",
			height:"200px"	
		});
	},function(){
		$(this).attr('style','border-bottom:1px dashed #c9c9c9;');
		$(this).find(".new_pic").stop().animate({
			width:"210px",
			height:"140px"	
		});	
	});
	
	//侧边
	$(".side li").hover(function(){
		$(this).find(".erweima").show().parents("li").siblings().find(".erweima").attr('style','display:none;');	
	},function(){
		$(this).find(".erweima").hide();
	});
	
	//弹框
	$("#submit").click(function(){
		$(".online_box").show();	
	});
	$("#sure").click(function(){
		$(this).parents(".online_box").hide();	
	});
})