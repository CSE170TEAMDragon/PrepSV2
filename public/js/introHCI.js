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
  //$("#donebutton").click(evaluation);
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

	/*if (document.getElementById("inlineRadio00").checked == true){
		var value = document.getElementById("inlineRadio00").value;
		console.log(value);
	}*/
}

function evaluation (e){
	var row1, row2, row3;
	var i;
	for( i = 0; i < 3 ; i++ ) {
		if( document.getElementById("inlineRadio0"+i).checked == true )
			row1 = document.getElementById("inlineRadio0"+i).value;
		if( document.getElementById("inlineRadio1"+i).checked == true )
			row2 = document.getElementById("inlineRadio1"+i).value;
		if( document.getElementById("inlineRadio2"+i).checked == true )
			row3 = document.getElementById("inlineRadio2"+i).value;
	}

	var categ0, categ1, categ2;

	var categ0 = $("#c0").text();
	var categ1 = $("#c1").text();
	var categ2 = $("#c2").text();

	var json = {
		"c1" : categ0,
		"c2" : categ1,
		"c3" : categ2,
		"r1" : row1,
		"r2" : row2,
		"r3" : row3
	}

	

}



