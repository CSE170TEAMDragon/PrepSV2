'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	/*$("#testjs").click(function(e) {	
	});

	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitClick);*/
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e){
	console.log("Project clicked");
	e.preventDefault();
	var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    $(containingProject).css("background-color", "#00FFFF");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.toggle();
    }

    //$(containingProject).css("background-color", "#000000");
}

function submitClick(e){
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

