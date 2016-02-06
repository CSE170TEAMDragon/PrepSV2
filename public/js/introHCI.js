'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".lockedQuestion").click(questionClicked);
  $("#loginButton").click(loginClicked);
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

function loginClicked(e){
  window.location.replace("http://preps2.herokuapp.com/question");
}