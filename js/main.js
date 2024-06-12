$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top-30;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    })
  
	/* timer */

	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").html( pad(hrs));
		$(".timer .minutes").html( pad(min));
		$(".timer .seconds").html( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) {
		s = ("00"+s).substr(-2);
		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
	}
	update();
	
	  !function (i) {
    var o, n;
    i(".title-accordion").on("click", function () {
      o = i(this).parents(".accordion_item"), n = o.find(".info"),
        o.hasClass("active_block") ? (o.removeClass("active_block"),
          n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
          o.siblings(".active_block").removeClass("active_block").children(
            ".info").stop(!0, !0).slideUp())
    })
  }(jQuery);
	

//$('.reviews').slick({
//	dots: false,
//	arrows: true,
//	speed: 500,
//	infinite: true,
//	adaptiveHeight: true,
//	fade: false,
//	cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
//	slidesToShow: 4,
//	slidesToScroll: 1,
//	vertical: true
//});   
	
	$('.button-m').addClass('autoink').append('<div class="ink animate" style="height: 200px;width: 250px;top: -20px;left: -140px;"></div>');
    
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$('.topnav').addClass("bounce");
		} else {
			$('.topnav').removeClass("bounce");
		}
	});
    
});

