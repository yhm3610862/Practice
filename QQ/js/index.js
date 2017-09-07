	//上拉刷
	$(function () {
		'use strict';
	 $(document).on("pageInit", "#page-ptr", function(e, id, page) {	
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 2s timeout
      setTimeout(function() {
        var cardHTML = '<p class="txt-p2">我是那谁：[笑脸]这个是什么</p>';

        $content.find('.car').replaceWith(cardHTML);
        // Done
        $.pullToRefreshDone($content);
      }, 2000);
    });
 });
 //下拉刷                           
    var loading = false;
    var maxItems = 100;
    var itemsPerLoad = 15;
    function addItems(number, lastIndex) {
            var html = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                html += '<li class="row swipeout"><div class="swipeout-content"><div class="pull-left div-img"></div><div class="pull-left card-container"><p class="txt-p1">绿叶西西网群</p><p class="txt-p2 car">小太阳：[图片]这个什么的什么</p></div><div class="pull-right"><p class="txt-p3">15:27</p><p class="txt-p4">99+</p></div></div><div class="swipeout-actions-right"><a>置顶</a><a class="bg-danger swipeout-delete">删除</a></div></li>'
            }
            $('.list-container').append(html);
       }
    var lastIndex = 20;
    addItems(itemsPerLoad,lastIndex);
    $(document).on('infinite', '.infinite-scroll',function() {

        // 如果正在加载，则退出
        if (loading) return;

        // 设置flag
        loading = true;

        setTimeout(function() {
            loading = false;

            if (lastIndex >= maxItems) {
                $.detachInfiniteScroll($('.infinite-scroll'));
                $('.infinite-scroll-preloader').remove();
                return;
            }

            addItems(itemsPerLoad, lastIndex);
            lastIndex = $('.list-container li').length;
        }, 1000);
    });
          $.init();
});    