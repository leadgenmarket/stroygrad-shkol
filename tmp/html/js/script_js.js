// placeholder
$(document).ready(function(){
	//$("input, textarea").on("focus", function(){
	$("body").on("focus","input, textarea",function(){
		if($(this).attr("data") != ''){
			if($(this).val() == $(this).attr("data"))
				$(this).val("");
		}
	});
	//$("input, textarea").on("blur", function(){
	$("body").on("blur","input, textarea",function(){
		if($(this).attr("data") != ''){
			if($(this).val() == "")
				$(this).val($(this).attr("data"));
		}
	});
});

// fixed_nav
$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        var height1 = $(document).height()-$(window).height()-100;   
        var result =  $(document).scrollTop();
        if (top < 100)
        {
        	$(".hl_top").removeClass("hl_top_act");
        }
        else
        {
        	$(".hl_top").addClass("hl_top_act");
        }
    });
});

// mask
$(document).ready(function(){
	$("body").on("click",".in_phone",function(){$(this).inputmask("+7 (999) 999 99 99");});
});


$(document).ready(function(){
	// nav mobile
	$(".btn_nav_mobile").click(function(){
		$(".hl_nav").slideToggle(500);
		$(this).toggleClass("btn_nav_mobile_open");
		return false;
	});

	$(".ht_btn_call, #pu_call .closeform, .fb_call").click(function(){
		$(".popup_rgba").fadeToggle(400);
		$("#pu_call").fadeToggle(700);
		$("body").toggleClass("overflow");
		return false;
	});

});