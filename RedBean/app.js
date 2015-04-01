var main=function(){
	$('.table td').on('mouseover',function(){
		$(this).css('color','blue')
	});
	$('.table td').on('mouseout',function(){
		$(this).css('color','white')
	});
	$('.pie a').on('click',function(){
		$(this).css('color','blue');
		$('.chicken a').css('color','white');
		$('.map a').css('color','white');
		$('.telephone a').css('color','white');
		$('.picture a').css('color','white');
		$('.RedBean').animate({
			top:'50px'
		},200);
		$('.Chicken').animate({
			top:'-1000px'
		},200);
		$('#googleMap').animate({
			top:'-1000px'
		},200);
		$('.Telephone').animate({
			top:'-1000px'
		},200);
		$('.list').animate({
			top:'-10000px'
		},1000);
	});
	$('.chicken a').on('click',function(){
		$(this).css('color','blue');
		$('.pie a').css('color','white');
		$('.map a').css('color','white');
		$('.telephone a').css('color','white');
		$('.picture a').css('color','white');
		$('.RedBean').animate({
			top:'-1000px'
		},200);
		$('.Chicken').animate({
			top:'50px'
		},200);
		$('#googleMap').animate({
			top:'-1000px'
		},200);
		$('.Telephone').animate({
			top:'-1000px'
		},200);
		$('.list').animate({
			top:'-10000px'
		},1000);
	});
	$('.map a').on('click',function(){
		$(this).css('color','blue');
		$('.pie a').css('color','white');
		$('.chicken a').css('color','white');
		$('.telephone a').css('color','white');
		$('.picture a').css('color','white');
		$('.RedBean').animate({
			top:'-1000px'
		},200);
		$('.Chicken').animate({
			top:'-1000px'
		},200);
		$('#googleMap').animate({
			top:'50px'
		},200);
		$('.Telephone').animate({
			top:'-1000px'
		},200);
		$('.list').animate({
			top:'-10000px'
		},1000);
	});
	$('.telephone a').on('click',function(){
		$(this).css('color','blue');
		$('.pie a').css('color','white');
		$('.chicken a').css('color','white');
		$('.map a').css('color','white');
		$('.picture a').css('color','white');
		$('.RedBean').animate({
			top:'-1000px'
		},200);
		$('.Chicken').animate({
			top:'-1000px'
		},200);
		$('#googleMap').animate({
			top:'-1000px'
		},200);
		$('.Telephone').animate({
			top:'150px'
		},200);
		$('.list').animate({
			top:'-10000px'
		},1000);
	});
	$('.picture a').on('click',function(){
		$(this).css('color','blue');
		$('.chicken a').css('color','white');
		$('.map a').css('color','white');
		$('.telephone a').css('color','white');
		$('.pie a').css('color','white');
		$('.RedBean').animate({
			top:'-1000px'
		},200);
		$('.Chicken').animate({
			top:'-1000px'
		},200);
		$('#googleMap').animate({
			top:'-1000px'
		},200);
		$('.Telephone').animate({
			top:'-1000px'
		},200);
		$('.list').animate({
			top:'0px'
		},1000);
	});
};

$(document).ready(main);