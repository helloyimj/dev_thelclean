// main slide
var n = 0;
var depth = 2;
(function ani() {
	$(".slide li").eq(n).css("z-index", depth++).fadeOut(0);
	$(".slide li").eq(n).delay(3000).fadeIn(500, function(){
		if(n == 3) n = 0;
		else n++;
		ani();
	});
})();

// scroll
$(".main_tit").css({"opacity": 1, "transform":"translate(-50%, -50%)"});
$(window).scroll(function(){
	var scTop = $(window, document, "html", "body").scrollTop();
	if(scTop > 150) {
		if(!$(".navs").hasClass("navs_shadow")) {
			$(".navs").stop().animate({"top": "-60px"}, 300, function(){
				$(this).addClass("navs_shadow");
				$(this).stop().animate({"top":0}, 300);
			});
		}
	}
	else {
		$(".navs").removeClass("navs_shadow");
	}
});

$("#bt_top").click(function(){
	$("html, body").stop().animate({"scrollTop": 0}, 500);
});

//$(".navs > .hamburger")
$(".navs").children(".hamburger").click(function(){
	$(".nav_sub").toggle();
});
$(".nav_sub > li ").click(function(){
	$(".nav_sub").toggle();
});

new WOW().init();

