'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('#inlineRadio3').click(great);
  $('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
}

// JavaScript for Hamburger Bar
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

// JavaScript for Level popup window
$('.myButton').click(function () {
	$('#overlay').fadeIn('slow');
	$('#popupBox').fadeIn('slow');
	$('#popupContent').fadeIn('slow');    
});

$('#overlay, .cancel').click(function () {
	$('#overlay').fadeOut('slow');
	$('#popupBox').fadeOut('slow');
	$('#popupContent').fadeOut('slow');    
});

function great(e){
	// var eval = $(this).closest('.row').find("p").text();
	console.log('eval');
	console.log($(this).find('p').text());
}






