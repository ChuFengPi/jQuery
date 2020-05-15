function scrollShow(selector,num){
	var w_h = $(window).outerHeight(true)
	var pc_h = $('.'+selector).height()
	$('.'+selector).children(':last').css('maxHeight',w_h*num)
	var max_h = parseInt($('.'+selector).children(':last').css('maxHeight'))
	if(pc_h >= max_h){
		$('.'+selector).children(':last').css('overflowY','scroll')
	}
}