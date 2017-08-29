// mobile menu function:::
$(function() {
	// add class js to hide main menu from mobile view
$("#menu").addClass("js");
    // add the mobile menu before the main nav
$("#menu").addClass("js").before('<div id="mobile">☰ MENU ☰</div>');
   // listen for clicks and toggle the visibility of the nav element
$("#mobile").click(function(){$("#menu").toggle("slow");});
   // remove the class if the window is resized (only for viewing on desktop)
$(window).resize(function(){if(window.innerWidth > 800) {$("#menu").removeAttr("style");}});
// slide down hidden div function
$(".button").click(function() {
	if ($(".slideBox").is(":hidden")){$(".slideBox").slideToggle("slow");}
	else { $(".slideBox").hide();}});

});
