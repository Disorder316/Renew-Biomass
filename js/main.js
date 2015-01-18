// Main js file
$(document).ready(function(){


	$('.home-pannel').mouseenter( function(){
			$(this).find('img').animate({top: "-40px", opacity: "1"}, 500);
		});
	$('.home-pannel').mouseleave( function(){
			$(this).find('img').animate({top: "0px", opacity: ".4"}, 500);
		});
});