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
  $(".feedbackAdd").click(feedbackAddClicked);
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

function feedbackAddClicked(e){
e.preventDefault();
console.log("feedback clicked");
var containingProject = $(this).closest(".feedbackAdd");
var feedback = $(containingProject).find("p");
  if (feedback.length == 0) {
    $(containingProject).append("<p style='margin-left: 60px'> Introduce yourself to lay out your background.</p>");
    console.log("feedback added" + containingProject);
  } 
  else {
       feedback.toggle();
  }
}