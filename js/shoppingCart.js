$(document).ready(function(){
	//nav我的淘宝标题的二级菜单
	$(".nav_myTao").hover(function(){
		$(this).css({
			"background":"#fff"
		}).find(".nav-myTao_nav").show();
	})
})