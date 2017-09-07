// JavaScript Document

//电话咨询
function iphone(){
	var html=	'<div class="t_call texC">'+
    			'<div class="call_top font14 c2828">'+
        		'<h3>提示</h3>'+
            	'<p>确定拨打电话：15857131870吗？</p>'+
        		'</div>'+
        		'<div class="call_btn bgfff font16">'+
        		'<a href="tel:15857131870" class="t_sure cfff">确定</a>'+
            	'<a href="javascript:cancel()" class="t_cancel c2828" style="width:49.5%;">取消</a>'+
        		'</div>'+
    			'</div>'
	$("body").append(html);
}
//短信咨询
function message(){
	var html=	'<div class="t_call texC">'+
    			'<div class="call_top font14 c2828">'+
        		'<h3>提示</h3>'+
            	'<p>确定发送短信：15857131870吗？</p>'+
        		'</div>'+
        		'<div class="call_btn bgfff font16">'+
        		'<a href="tel:15857131870" class="t_sure cfff">确定</a>'+
            	'<a href="javascript:cancel()" class="t_cancel c2828" style="width:49.5%;">取消</a>'+
        		'</div>'+
    			'</div>'
	$("body").append(html);
}

function cancel(){
	$(".t_call").remove();
}