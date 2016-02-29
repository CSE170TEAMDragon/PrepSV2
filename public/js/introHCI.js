'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $(".col-xs-2").click(checkRadio);
  // $(".button")click(record);
  $("#inputDefault2").click(checkCareer);
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


function checkRadio (e){
	if( (document.getElementById("inlineRadio00").checked == true ||
	   document.getElementById("inlineRadio01").checked == true ||
	   document.getElementById("inlineRadio02").checked == true) && 
	   (document.getElementById("inlineRadio10").checked == true ||
		document.getElementById("inlineRadio11").checked == true ||
		document.getElementById("inlineRadio12").checked == true) &&
		(document.getElementById("inlineRadio20").checked == true ||
		document.getElementById("inlineRadio21").checked == true ||
		 document.getElementById("inlineRadio22").checked == true) ){
			document.getElementById("donebutton").disabled = false;
			
	}
}

function checkCareer(e){
	console.log(document.getElementById("inputDefault1").value.length);
	if (document.getElementById("inputDefault1").value.length != 0){
		document.getElementById("toQuestion").disabled=false;
	}
}

function record(e){
	console.log('button clicked');
	$(".recordingPic").src="/images/microphone3.png";
}

