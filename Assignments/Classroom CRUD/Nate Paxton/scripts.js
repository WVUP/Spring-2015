//Functions that are to be executed when DOM is loaded
document.addEventListener("DOMContentLoaded", function() { 

  document.querySelector('#begin').style.display = "block";
  document.querySelector('#main').style.display = "none";
  logTimer("Document ready");
});

var began = function(){
	document.querySelector('#begin').style.display = "none";
	document.querySelector('#main').style.display = "block";

	logTimer("Begin screen closed, main displayed");
}

var logTimer = function(message){
	var today = new Date();
	console.log(message + ": " + today.toDateString() + " @ " + today.toTimeString());
}
