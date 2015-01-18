// Main js file
$(document).ready(function(){


	$('.home-pannel').mouseover( function(){
			$(this).find('img').animate({top: "-20px", opacity: "1"}, 500);
		});
	$('.home-pannel').mouseleave( function(){
			$(this).find('img').animate({top: "0px", opacity: ".4"}, 500);
		});
});