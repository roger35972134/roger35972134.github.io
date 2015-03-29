var main=function(){
	//push the body right 285px
	$('.icon-menu').click(function(){
		$('.menu').animate({
			bottom:"400px"
		},200);
		$('body').animate({
			top:"-200px"
		},200);
		$('.icon-close').animate({
			left:"0px"
		},1000);
	});
	//Then push them back
	$('.icon-close').click(function(){
		$('.menu').animate({
			bottom:"-350px"
		},200);
		$('body').animate({
			top:"0px"
		},200);
		$('.icon-close').animate({
			left:"-400px"
		},1000);
	});
	$('.icon-menu').on('mouseover',function(){
		$('.icon-menu').css('color','yellow')
	});
	$('.icon-menu').on('mouseout',function(){
		$('.icon-menu').css('color','white')
	});
	$('.menu a').on('mouseover',function(){
		$(this).css('color','yellow')
	});
	$('.menu a').on('mouseout',function(){
		$(this).css('color','white')
	});
};

$(document).ready(main);