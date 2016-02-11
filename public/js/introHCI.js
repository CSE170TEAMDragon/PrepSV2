'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $(".lockedQuestion").click(questionClicked);
  $('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
}

function questionClicked(e){
	e.preventDefault();
  var containingProject = $(this).closest(".lockedQuestion");
  var description = $(containingProject).find("p");
  if (description.length == 0) {
    $(containingProject).append("<div class= 'lockMessage'><p>This question is locked. Respond to previous questions to unlock!</p></div>");
  } 
  else {
       description.toggle();
  }
}

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



