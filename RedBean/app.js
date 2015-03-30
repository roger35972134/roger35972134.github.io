var main=function(){
	$('.table td').on('mouseover',function(){
		$(this).css('color','black')
	});
	$('.table td').on('mouseout',function(){
		$(this).css('color','white')
	});
	$('.pie a').on('click',function(){
		$('.RedBean').animate({
			top:'50px'
		},200);
		$('.Chicken').animate({
			top:'-1000px'
		},200);
		$('#googleMap').animate({
			top:'-1000px'
		},200);
	});
	$('.chicken a').on('click',function(){
		$('.RedBean').animate({
			top:'-1000px'
		},200);
		$('.Chicken').animate({
			top:'50px'
		},200);
		$('#googleMap').animate({
			top:'-1000px'
		},200);
	});
	$('.map a').on('click',function(){
		$('.RedBean').animate({
			top:'-1000px'
		},200);
		$('.Chicken').animate({
			top:'-1000px'
		},200);
		$('#googleMap').animate({
			top:'50px'
		},200);
	});
	/*$('.map a').on('click',function(){
		$('.RedBean').animate({
			top:'-1000px'
		},200);
		$('.Chicken').animate({
			top:'-1000px';
		},200);
		$('.Map').animate({
			top:'50px';
		},200);
	});*/
};

$(document).ready(main);